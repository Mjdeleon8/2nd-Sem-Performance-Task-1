// const imageContainer = document.getElementsByClassName(".img-container");
// const images = container.querySelectorAll("image");

// container.addEventListener("click", () => {
//   images[1].classList.toggle("hidden");
// });

// const imageContainer = document.querySelector(".img-container");
// const images = document.querySelectorAll("image");

// imageContainer.addEventListener("click", () => {
//   images.classList.toggle("hidden");
//   console.log("dsad");
// });

// const imageContainer = document.querySelector(".img-container");
// const images = ["image-1", "image-3"];

// let number = 0;

// imageContainer.addEventListener("click", () => {
//   let randomImage = images.length - 1;
//   console.log(randomImage);
//   if (randomImage > 0) {
//     images[1].classList.toggle("hidden");
//   }
// });

// function gettingNumber(randomImage) {
//   number = randomImage;
//   console.log(number);
// }

// Open and Closed Eyes Function
let open = document.getElementById("open"); //button open
let closed = document.getElementById("closed"); //button closed
let imageOne = document.getElementById("image-one");
let imageTwo = document.getElementById("image-two");
let paraG = document.getElementById("paragraph");

// open eyes show and closed eyes will be hidden
open.addEventListener("click", () => {
  imageOne.style.opacity = 1; //open eyes show
  imageTwo.style.opacity = 0; //closed eyes hidden
  paraG.style.display = "block";
});

// closed eyes show and open eyes will be hidden
closed.addEventListener("click", () => {
  imageOne.style.opacity = 0; //open eyes hidden
  imageTwo.style.opacity = 1; //closed eyes show
  paraG.style.display = "none";
});
