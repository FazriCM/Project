// Optional: This code smooth scrolls to the section on clicking the nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});





const textEl = document.getElementById("text")

const text = "Explore Bali's Beauty"

let i = 1 ;
let speed = 300 / 1.5;

writeText ();

function writeText (){
  textEl.innerHTML = text.slice(0 , i)
  i++;

  if(i > text.length){
      i = 1
  }

  setTimeout(writeText , speed)
}


var slideIndex = 0;
showDivs(slideIndex);

// Function to control slide navigation (manual control)
function plusDivs(n) {
showDivs(slideIndex += n);
}

// Function to show the slides
function showDivs(n) {
var slides = document.getElementsByClassName("mySlides");

// Ensure that the slideIndex loops correctly
if (n >= slides.length) {
  slideIndex = 0;
}
if (n < 0) {
  slideIndex = slides.length - 1;
}

// Hide all slides
for (var i = 0; i < slides.length; i++) {
  slides[i].classList.remove("active"); // Remove the active class
}

// Show the current slide with the active class
slides[slideIndex].classList.add("active");
}

// Auto-sliding functionality with a 3-second delay
function autoSlide() {
slideIndex++;
showDivs(slideIndex);
setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

// Start the auto-sliding
autoSlide();

function initMap() {
// Lokasi Bali
var bali = { lat: -8.3405, lng: 115.0920 };

// Peta Google dengan zoom out level (misalnya level 6)
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,  // Ubah angka zoom untuk mengatur zoom out
    center: bali
});

// Penanda Lokasi Bali
var marker = new google.maps.Marker({
    position: bali,
    map: map
});
}

document.getElementById('hamburger-menu').addEventListener('click', function () {
const navMenu = document.getElementById('nav-menu');
navMenu.classList.toggle('active'); // Toggle 'active' class to show/hide menu
});

//Daftar gambar dan deskripsi untuk proyek


