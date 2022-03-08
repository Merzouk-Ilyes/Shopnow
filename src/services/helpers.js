export function eyeTogglerOne(document) {
  let eye0 = document.querySelectorAll(".eye_icon")[0];
  if (eye0) eye0.style.display = "none";
  let eye1 = document.querySelectorAll(".eye_icon")[1];
  if (eye1) eye1.style.display = "block";

  let pass = document.getElementById("password");
  if (pass) pass.type = "text";
}
export function eyeTogglerTwo(document) {
  let eye0 = document.querySelectorAll(".eye_icon")[0];
  if (eye0) eye0.style.display = "block";
  let eye1 = document.querySelectorAll(".eye_icon")[1];
  if (eye1) eye1.style.display = "none";

  let pass = document.getElementById("password");
  if (pass) pass.type = "password";
}

export function openNav(document) {
  let sideNavWidth = document.getElementById("mySidenav");
  if (sideNavWidth) sideNavWidth.style.width = "100vw";

  let searchContainerHidden =
    document.querySelectorAll < HTMLElement > "search-container-hidden"[0];
  if (searchContainerHidden) searchContainerHidden.style.display = "flex";
}
export function closeNav(document) {
  let sideNavWidth = document.getElementById("mySidenav");
  if (sideNavWidth) sideNavWidth.style.width = "0";
  let searchContainerHidden =
    document.querySelectorAll<HTMLElement>"search-container-hidden"[0];
  if (searchContainerHidden) searchContainerHidden.style.display = "none";
}

let i = 0;

export function leftSlide(document,picsBig,picsSmall) {
  let slider= document.getElementsByClassName("slider")[0];
  i++;
  if (slider.offsetWidth > 1000) {
    if (i >= 2) i = 0;
    slider.style.backgroundImage = picsBig[i];
  } else {
    if (i >= 3) i = 0;

    slider.style.backgroundImage = picsSmall[i];
  }
}

export function rightSlide(document,picsBig,picsSmall) {
  let slider = document.getElementsByClassName("slider")[0];
  i--;
  if (slider.offsetWidth > 1000) {
    if (i < 0) i = 1;
    slider.style.backgroundImage = picsBig[i];
  } else {
    if (i < 0) i = 2;
    slider.style.backgroundImage = picsSmall[i];
  }
}