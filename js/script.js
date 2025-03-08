


var swiper = new Swiper(".mySwiper", {
    loop: true, // 無限ループ
    autoplay: {
        delay: 1, // ほぼゼロにすることで滑らかに流れる
        disableOnInteraction: false, // ユーザー操作後も自動再生
    },
    speed: 5000, // スライドの移動速度（5秒かけて1スライド）
    slidesPerView: "auto", // 画面サイズに応じて複数表示
    centeredSlides: true, // 現在のスライドを中央に
    spaceBetween: 20, // スライド間の余白
});


document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector(".text-container-2");

    function fadeInOnScroll() {
        const rect = textContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8) { // 画面の80%に入ったら
            textContainer.classList.add("fade-in");
        }
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // ページロード時にもチェック
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".product");

    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.8) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // ページ読み込み時にも実行
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.8) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // ページロード時にも実行
});




