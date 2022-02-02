// ===============================SHOW MENU==================================

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")


//================================MENU SHOW=================================
if (navToggle) { 
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
}


//================================REMOVE MENU MOBILE=========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));


//===================================CHANGE BACKGROUND HEADER=================
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 100) header.classList.add("scroll-header"); else header.classList.remove("scrollheader")
}

window.addEventListener("scroll", scrollHeader);

//=============================SWIPER DISCOVER===============================

var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 5,
  coverflowEffect: {
    rotate: 50,
  },
});



//=============================VIDEO===============================

const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");


function playPause() {
  if (videoFile.paused) {
    //Play video
    videoFile.play();

    //Change the icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    //Pause video
    videoFile.pause();

    //Change the icon
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}

videoButton.addEventListener("click", playPause);

function finalVideo() {
  //Video ends, icon change
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}

//ended, when the video ends
videoFile.addEventListener("ended", finalVideo)