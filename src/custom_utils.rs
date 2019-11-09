use rocket::response::{status, NamedFile};
use std::path::{Path, PathBuf};

/// Take in a path buff, check if it's a file or not, and return result
pub fn get_file_or_none(
  path_buf: Option<PathBuf>,
) -> Result<Option<NamedFile>, status::NotFound<&'static str>> {
  let file = NamedFile::open(Path::new("/").join("")).ok();
  if file.is_some() {
    Result::Ok(file)
  } else {
    Result::Err(status::NotFound("Could not find file of that name"))
  }
}
