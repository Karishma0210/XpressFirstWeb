// dependency 
let header = document.getElementById("header");
let header_nav = document.getElementById("header-nav");
let nav_item = header.getElementsByClassName("nav-item");
const sections = document.querySelectorAll("section[id]");
let submit = document.querySelector(".submit");

// ===== Header animation =======
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) header.classList.add("is-sticky");
    else header.classList.remove("is-sticky");
});

// ======== header active class genarate ==========

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".header-nav-items a[href*=" + sectionId + "]").classList.add("is-active");
    } else {
      document.querySelector(".header-nav-items a[href*=" + sectionId + "]").classList.remove("is-active");
    }
  });
}

// Alert submit button
submit.addEventListener('click',() => {
  document.querySelector('.alert').style.opacity = '1'
})

const first = document.querySelector('.item-slide ');
const slide = () => {
  const before = document.querySelector('.showing');
  if (before) {
    before
      .classList
      .remove('showing');
    const next = before.nextElementSibling;
    if (next) {
      next
        .classList
        .add('showing')
    } else {
      first
        .classList
        .add('showing');
    }
  } else {
    first
      .classList
      .add('showing');
  }
}
slide();

setInterval(slide, 3000);