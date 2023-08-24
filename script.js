// // Script for navigation bar
let btnNavO = document.getElementById("open");
let btnNavC = document.getElementById("close");
let ulLinks = document.querySelector("nav ul");
let clo = document.querySelector(".upCo");
btnNavO.addEventListener("click", (e) => {
  ulLinks.style = "right: 0px;";
});
btnNavC.addEventListener("click", (e) => {
  ulLinks.style = "right: -150px;";
});
clo.addEventListener("click", (e) => {
  ulLinks.style = "right: -150px;";
});

// let info = document.querySelectorAll(".info p span");
// let img = document.querySelectorAll(".info img");
// let view = document.querySelectorAll(".ovo");
// let kd = document.querySelectorAll(".price");
// console.log(info);

// info.forEach((el) => {
//   el.addEventListener("click", (ev) => {
// ev.currentTarget.
//   });
// });

// kd.addEventListener("click", (e) => {
//   view.style = "visibility: hidden;";
//   img.style = "filter: brightness(1);";
// });
