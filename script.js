var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var i = 0;
var txt = "Hi, I'm Turan, a front-end developer."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
async function typeWriter() {
  if (i < txt.length) {
    document.getElementById("main-info").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var bars = document.getElementsByClassName("animation-bar");

function animatedSlides() {
  // setTimeout(animate, 0)
  // setTimeout(animate, 400)
  // setTimeout(animate, 600)
  setTimeout(removeAnimation, 1000);
  setTimeout(typeWriter, 1500);
  setTimeout(changeScale, 1500);
}
animatedSlides();

index = 0;
function animate() {
  bars[index].style.width = "100%";
  index++;
}
function removeAnimation() {
  document.getElementsByClassName("open-animation")[0].style.width = "0";
}
function changeScale() {
  document.getElementsByClassName("main-section")[0].style.transform =
    "scale(1)";
}
