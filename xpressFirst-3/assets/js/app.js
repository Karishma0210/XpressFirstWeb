// dependency 
let header = document.getElementById("header");
let header_nav = document.getElementById("header-nav");
let nav_item = header.getElementsByClassName("nav-item");

// ===== Header animation =======
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) header.classList.add("is-sticky");
    else header.classList.remove("is-sticky");
});