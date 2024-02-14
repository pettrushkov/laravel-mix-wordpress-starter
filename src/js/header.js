document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // mobileMenu();
  // headerTop();
});

const headerTop = () => {
  const body = document.body,
    header = document.querySelector(".header");

  document.addEventListener("scroll", () => {
    const origOffsetY = body.getBoundingClientRect().top;

    if (window.scrollY > origOffsetY) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
};

// Show/hide mobile menu by click on burger menu
const mobileMenu = () => {
  const headerMenu = document.querySelector(".header-menu"),
    headerBurgerBtn = document.querySelector(".header-menu-btn");

  if (!headerMenu || !headerBurgerBtn) {
    return false;
  }

  headerBurgerBtn.addEventListener("click", () => {
    headerBurgerBtn.classList.toggle("active");
    headerMenu.classList.toggle("active");
  });

  // Close mobile menu if clicked on link with anchor on mobile
  const headerLinks = headerMenu.querySelectorAll(
    'a[href^="#"], a[href^="/#"]'
  );
  if (headerLinks.length) {
    // mobile - close menu
    headerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (headerMenu.classList.contains("active")) {
          headerBurgerBtn.classList.remove("active");
          headerMenu.classList.remove("active");
        }
      });
    });

    // smooth scroll to anchor
    headerLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href").substring(1);
        smoothScroll(target);
      });
    });
  }
};

const smoothScroll = (target) => {
  const element = document.getElementById(target.replaceAll(/[/#]/g, "")),
    headerHeight = document.querySelector(".header").scrollHeight;

  if (element) {
    window.scrollTo({
      top: element.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
};
