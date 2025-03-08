document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menuOverlay = document.querySelector(".header-under");
    const closeBtn = document.querySelector(".close-btn");

    // メニューを開く
    hamburgerMenu.addEventListener("click", function () {
        menuOverlay.classList.add("active");
        document.body.classList.add("no-scroll");
    });

    // メニューを閉じる（×ボタン）
    closeBtn.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });

    // メニュー外をクリックすると閉じる
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".menu-content") && !event.target.closest(".hamburger-menu")) {
            menuOverlay.classList.remove("active");
            document.body.classList.remove("no-scroll");
        }
    });
});
