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
        open.style.display = "flex";
        close.style.display = "none";
        show.style.transform = "translateX(100%)";
    });
}
    

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtns = document.querySelectorAll(".toggle-btn");
  
    toggleBtns.forEach(btn => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation(); // ボタンだけが反応するようにする（aタグに影響しない）
        const content = btn.parentElement.nextElementSibling;
        content.classList.toggle("open");
        btn.classList.toggle("rotate");
  
        if (content.classList.contains("open")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  
    // aタグのクリック時にはアコーディオン開閉しないように設定しない（遷移を許可）
  });