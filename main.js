const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuIcon = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");
const closeIcon = document.querySelector(".close-icon");
const navItemLinks = document.querySelectorAll(".nav-items ul li");
const mainNav = document.querySelector("nav.main-nav");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dots .dot");

menuIcon.addEventListener("click", () => {
  navItems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  navItems.classList.remove("active");
});

navItemLinks.forEach((li, i) => {
  li.style.transitionDelay = `${i * 150}ms`;
});

navItemLinks.forEach((i) => {
  i.addEventListener("click", () => {
    navItems.classList.remove("active");
  });
});

const removeActiveClass = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
};

window.addEventListener("scroll", () => {
  let windowTop = window.scrollY;

  sections.forEach((section) => {
    let offset = section.offsetTop - 200;
    let height = section.offsetHeight - 200;
    let id = section.getAttribute("id");

    if (windowTop >= offset && windowTop < offset + height) {
      let currentDot = document.querySelector(`.dots a[href="#${id}"]`);
      removeActiveClass();
      currentDot.classList.add("active");
    } else if (windowTop < 300) {
      removeActiveClass();
      dots[0].classList.add("active");
    }
  });

  if (windowTop > 100) {
    mainNav.style.padding = "8px 0";
  } else {
    mainNav.style.padding = "16px 0";
  }
});
