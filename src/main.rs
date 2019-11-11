#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
use std::env;

mod routes;
use crate::routes::{error_handlers, frontend};

fn main() {
    let routes = routes![frontend::root, frontend::catch_all];
    let catchers = catchers![error_handlers::not_found];
    println!("{:#?}", env::current_dir());

    std::thread::spawn(move || println!("Hello from api thread"));

    rocket::ignite()
        .mount("/", routes)
        .register(catchers)
        .launch();
}
