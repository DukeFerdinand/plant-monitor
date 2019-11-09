#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
mod custom_utils;
use regex::Regex;
use rocket::response::{status, NamedFile};
use std::env;
use std::path::{Path, PathBuf};

/// Send index.html on root
/// Other handler will send asset files
#[get("/")]
fn root() -> Result<Option<NamedFile>, status::NotFound<&'static str>> {
    let file = NamedFile::open(Path::new("dist").join("index.html")).ok();
    if file.is_some() {
        Result::Ok(file)
    } else {
        Result::Err(status::NotFound("Could not find index file"))
    }
}

/// Catch all handler to route things to the front end
/// Checks if path to file exists, else returns index.html
#[get("/<path_req..>")]
fn catch_all(path_req: PathBuf) -> Result<Option<NamedFile>, status::NotFound<&'static str>> {
    //TODO: Limit the amount of if statements required here
    // Check for pattern like "file.zip", only at the end of the path. Remove $ to check full path
    let re = Regex::new(r"[A-z0-9]+\.([A-z]*)$").unwrap();

    let is_file_request = re.is_match(&path_req.to_string_lossy());
    // Either attempt to return file or send client back to front end
    if is_file_request {
        //? Use below code to get just the file name. Useful for proxies/shortening
        // let path_to_string = &path_req.to_string_lossy();
        // let file_name = Regex::new(r"(\w+)(\.\w+)+(.*(\w+)(\.\w+)+)$")
        //     .unwrap()
        //     .captures(&path_to_string);
        let file = NamedFile::open(Path::new("dist").join(&path_req)).ok();
        if file.is_some() {
            Result::Ok(file)
        } else {
            Result::Err(status::NotFound("Could not find file of that name"))
        }
    } else {
        let path = Path::new("dist").join("index.html");
        let file = NamedFile::open(path).ok();
        if file.is_some() {
            Result::Ok(file)
        } else {
            Result::Err(status::NotFound("Could not find index file"))
        }
    }
}

#[catch(404)]
fn file_or_404() -> &'static str {
    println!("{:#?}", "wrong path");
    "Test"
}

fn main() {
    let routes = routes![root, catch_all];
    println!("{:#?}", env::current_dir());

    rocket::ignite().mount("/", routes).launch();
}
