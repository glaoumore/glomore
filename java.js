const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.togglem("sticky", this.window.scrollY > 0);
})