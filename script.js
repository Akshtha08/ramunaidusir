// Initialize AOS
AOS.init();

// Back to top button
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.classList.remove("d-none");
  } else {
    btn.classList.add("d-none");
  }
});

// Mobile menu toggle
document.querySelector(".mobile-nav-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("d-none");
});

// Dynamic Year
document.getElementById("currentYear").textContent = new Date().getFullYear();
// Initialize AOS
AOS.init();

// Back to top button
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.classList.remove("d-none");
  } else {
    btn.classList.add("d-none");
  }
});

// Mobile menu toggle
document.querySelector(".mobile-nav-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("d-none");
});

// Dynamic year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Bootstrap tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Only prevent default if this is an in-page anchor and it exists
    if (href.startsWith("#") && href.length > 1) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});
