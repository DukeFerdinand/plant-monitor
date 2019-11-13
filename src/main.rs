#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
use std::env;

use std::collections::HashMap;

extern crate reqwest;
extern crate serde;
extern crate serde_json;

use serde_json::{json, Value};

mod routes;
use crate::routes::{error_handlers, frontend};

fn get_weather() -> Result<Value, Box<std::error::Error>> {
    let api_key: Option<String> = None;
    if api_key == None {
        panic!("No API KEY provided. You must provide one to use Dark Sky API");
    }
    let resp = reqwest::get("https://api.darksky.net/forecast//30.171153,%20-97.775405")?.text()?;
    // des_resp stands for 'deserialized response'
    let des_resp: Value = serde_json::from_str(&resp)?;
    Ok(des_resp)
}

fn main() {
    let routes = routes![frontend::root, frontend::catch_all];
    let catchers = catchers![error_handlers::not_found];
    println!("{:#?}", env::current_dir());

    std::thread::spawn(move || {
        let data = get_weather();
        if data.is_ok() {
            let weather = data.unwrap();
            let temperature = &weather["currently"]["temperature"];
            println!("Weather in Austin: {:?}F", temperature.as_f64().unwrap());
        } else {
            println!(
                "Something went wrong fetching your data. {:?}",
                data.unwrap_err()
            );
        }
    });

    rocket::ignite()
        .mount("/", routes)
        .register(catchers)
        .launch();
}
