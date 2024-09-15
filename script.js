// form untuk DarkMode/LightMode
document.addEventListener("DOMContentLoaded", function () {
  // Navigasi
  const nav = document.querySelector("nav");
  const navH1 = nav.querySelector("h1");
  const navList = nav.querySelectorAll("li, a"); // Add space between 'li' and 'a'

  // Home
  const home = document.getElementById("home");
  const homeH3 = home.querySelector("h3");
  const homeH3_span = homeH3.querySelector("span");
  const homeButton = home.querySelector("a");
  const homeDekor = document.querySelector(".home-dekor");
  const homeDekorH1 = homeDekor.querySelector("h1");
  const home_sosmed = document.querySelector(".home-sosmed");
  const home_sosmedList = home_sosmed.querySelectorAll("li, a"); // Add space between 'li' and 'a'

  // About
  const about = document.getElementById("about");
  const myStory = document.querySelector(".myStory");

  // skill
  const skill = document.getElementById("skill"); // Ensure 'project' is in lowercase
  const ulskill = skill.querySelector("ul");
  const liskill = ulskill.querySelectorAll("li");

  // Project
  const bglightMode = document.getElementById("bglightMode");
  const bgdarkMode = document.getElementById("bgdarkMode");

  // Contact
  const contact = document.getElementById("contact");
  const inputContact = contact.querySelectorAll("input");
  const textareaContact = contact.querySelector("textarea");
  const sendMessage = document.getElementById("sendMessage");

  // Button To Top
  const toTopbg = document.querySelector(".toTop");

  // Dark Mode Button
  const darkMode = document.getElementById("darkMode");
  darkMode.addEventListener("click", function () {
    const darkBody = document.body;

    // Toggle dark mode classes
    darkBody.classList.toggle("active");

    // Navigasi
    navH1.classList.toggle("active");
    navList.forEach((list) => {
      list.classList.toggle("active");
    });

    // Home
    homeH3_span.classList.toggle("active");
    homeButton.classList.toggle("active");
    homeDekorH1.classList.toggle("active");
    home_sosmedList.forEach((Homelist) => {
      Homelist.classList.toggle("active");
    });

    // About
    about.classList.toggle("active");
    myStory.classList.toggle("active");

    // skill
    liskill.forEach((mySkil) => {
      const h1skill = mySkil.querySelectorAll("h1");
      h1skill.forEach((h1List) => {
        h1List.classList.toggle("active");
      });
    });

    // Project
    bglightMode.classList.toggle("active");
    bgdarkMode.classList.toggle("active");

    // Button TO Top
    toTopbg.classList.toggle("active");

    // Contact
    sendMessage.classList.toggle("active");
    inputContact.forEach((inContact) => {
      inContact.classList.toggle("active");
    });
    textareaContact.classList.toggle("active");
  });
});

// foto ketika di hover dekor nya jadi bagus
const about_foto = document.querySelector(".about-foto");
const aboutImg_dekor2 = document.querySelector(".aboutImg_dekor2");
const aboutImg_dekor3 = document.querySelector(".aboutImg_dekor3");

about_foto.addEventListener("mouseover", function () {
  about_foto.classList.add("hover");
  aboutImg_dekor2.classList.add("hover");
  aboutImg_dekor3.classList.add("hover");
});
about_foto.addEventListener("mouseout", function () {
  about_foto.classList.remove("hover");
  aboutImg_dekor2.classList.remove("hover");
  aboutImg_dekor3.classList.remove("hover");
});

// Fungsi Button To Top
// Jika posisi window tidak lebih dari 300px maka button go to bottom
// jika window lebih dari 300px maka button go to top

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", function () {
  toTop.addEventListener("click", function () {
    if (window.scrollY < 500) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
  });
}

// Fungsi burger
const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  const navigasi = document.querySelector(".navigasi");
  navigasi.classList.toggle("active");
});
