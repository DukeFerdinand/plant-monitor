use regex::Regex;
use rocket::response::NamedFile;
use std::path::{Path, PathBuf};

/// Send index.html on root
/// Other handler will send asset files
#[get("/")]
pub fn root() -> Option<NamedFile> {
    NamedFile::open(Path::new("dist").join("index.html")).ok()
}

/// Catch all handler to route things to the front end
/// Checks if path to file exists, else returns index.html
#[get("/<path_req..>")]
pub fn catch_all(path_req: PathBuf) -> Option<NamedFile> {
    // Check for pattern like "file.zip", only at the end of the path. Remove $ to check full path
    let re = Regex::new(r"[A-z0-9]+\.([A-z]*)$").unwrap();
    let is_file_request = re.is_match(&path_req.to_string_lossy());
    // Either attempt to return file or send client back to front end
    if is_file_request {
        NamedFile::open(Path::new("dist").join(&path_req)).ok()
    } else {
        NamedFile::open(Path::new("dist").join("index.html")).ok()
    }
}
