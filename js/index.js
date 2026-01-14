const images = [
  "../images/img1.jpg",
  "../images/img2.jpg",
  "../images/img3.jpg",
  "../images/img4.jpg",
  "../images/img5.jpg",
  "../images/img6.jpg",
  "../images/img7.jpg",
  "../images/img8.jpg",
  "../images/img9.jpg",
  "../images/img10.jpg",
  "../images/img11.jpg",
  "../images/img12.jpg"
];

let index = 0;

const img = document.getElementById("img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slideBox = document.getElementById("slide");
const bg = document.getElementById("bg");

img.src = images[index];
bg.style.backgroundImage = `url(${images[index]})`;

images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = "slide";
  if (i === 0) dot.classList.add("active");

  slideBox.appendChild(dot);

  dot.addEventListener("click", () => {
    index = i;
    update();
  });
});

const slides = document.querySelectorAll(".slide");

function update() {
  img.src = images[index];
  bg.style.backgroundImage = `url(${images[index]})`;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

next.onclick = () => {
  index = (index + 1) % images.length;
  update();
};

prev.onclick = () => {
  index = (index - 1 + images.length) % images.length;
  update();
};
