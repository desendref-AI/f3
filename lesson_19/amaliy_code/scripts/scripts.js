const element = document.querySelector(".rasm");

element.addEventListener("mouseenter", () => {
    element.classList.remove("animate__fadeInUp");
    element.classList.add("animate__fadeOutDown");
});