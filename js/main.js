`use strict`;

{
    const open = document.getElementById("open-btn");
    const close = document.getElementById("close-btn");
    const show = document.querySelector(".header-under");

    open.addEventListener("click", () => {
        open.style.display = "none";
        close.style.display = "inline";
        show.style.transform = "translateX(0)";
    });

    close.addEventListener("click", () => {
        open.style.display = "inline";
        close.style.display = "none";
        show.style.transform = "translateX(100%)";
    });
}
    