#[catch(404)]
pub fn not_found() -> &'static str {
  println!("{:#?}", "wrong path");
  "Test"
}
