export function eyeTogglerOne() {
  let eye0 = document.querySelectorAll<HTMLElement>(".eye_icon")[0];
  if (eye0) eye0.style.display = "none";
  let eye1 = document.querySelectorAll<HTMLElement>(".eye_icon")[1];
  if (eye1) eye1.style.display = "block";

  let pass = document.getElementById("password") as HTMLInputElement;
  if (pass) pass.type = "text";
}
export function eyeTogglerTwo() {
  let eye0 = document.querySelectorAll<HTMLElement>(".eye_icon")[0];
  if (eye0) eye0.style.display = "block";
  let eye1 = document.querySelectorAll<HTMLElement>(".eye_icon")[1];
  if (eye1) eye1.style.display = "none";

  let pass = document.getElementById("password") as HTMLInputElement;
  if (pass) pass.type = "password";
}
