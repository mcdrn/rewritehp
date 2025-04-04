


// var swiper = new Swiper(".mySwiper", {
//     loop: true, // 無限ループ
//     autoplay: {
//         delay: 1, // ほぼゼロにすることで滑らかに流れる
//         disableOnInteraction: false, // ユーザー操作後も自動再生
//     },
//     speed: 5000, // スライドの移動速度（5秒かけて1スライド）
//     slidesPerView: "auto", // 画面サイズに応じて複数表示
//     centeredSlides: true, // 現在のスライドを中央に
//     spaceBetween: 20, // スライド間の余白
// });


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 2.5, // 前後のスライドが見えるようにする
        centeredSlides: true,
        spaceBetween: 20,
        on: {
            slideChangeTransitionStart: function () {
                resetProgressBar(); // スライドが変わるとリセット
            },
            slideChangeTransitionEnd: function () {
                fillProgressBar(); // スライドが変わった後に色をつける
            }
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1000,
            slidesPerView: 2.5, // 前後のスライドが見えるようにする
            centeredSlides: true,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                slideChangeTransitionStart: function () {
                    resetProgressBar();
                },
                slideChangeTransitionEnd: function () {
                    fillProgressBar();
                }
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                loop: true, // 無限ループ
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                speed: 1000, // スライドの移動速度
                slidesPerView: 2.5, // 前後のスライドが見えるようにする
                centeredSlides: true, // スライドを中央に配置
                spaceBetween: 20, // スライド間の余白
                navigation: {
                    nextEl: ".swiper-button-next", // 右矢印
                    prevEl: ".swiper-button-prev", // 左矢印
                }
            });
        
            // ボタンが正しく認識されているか確認
            console.log("Swiper initialized:", swiper);
            console.log("Next button:", document.querySelector(".swiper-button-next"));
            console.log("Prev button:", document.querySelector(".swiper-button-prev"));
        
            // ボタンクリック時のイベントを追加
            document.querySelector(".swiper-button-next").addEventListener("click", function () {
                console.log("Next button clicked");
            });
        
            document.querySelector(".swiper-button-prev").addEventListener("click", function () {
                console.log("Prev button clicked");
            });
        });
        
        








    
        function resetProgressBar() {
            var progressBar = document.querySelector(".progress-bar");
            if (progressBar) {
                progressBar.style.transition = "none";
                progressBar.style.width = "0%";
            }
        }
    
        function fillProgressBar() {
            var progressBar = document.querySelector(".progress-bar");
            if (progressBar) {
                setTimeout(() => {
                    progressBar.style.transition = "width 3s linear";
                    progressBar.style.width = "100%";
                }, 50);
            }
        }
    
        resetProgressBar();
        fillProgressBar();
    });
    








    function resetProgressBar() {
        var progressBar = document.querySelector(".progress-bar");
        if (progressBar) {
            progressBar.style.transition = "none"; // まずアニメーションをオフにする
            progressBar.style.width = "0%"; // 一度リセット
        }
    }

    function fillProgressBar() {
        var progressBar = document.querySelector(".progress-bar");
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.transition = "width 3s linear"; // アニメーションを再適用
                progressBar.style.width = "100%"; // 徐々に色をつける
            }, 50); // 少し遅延を入れることで、リセット後にアニメーションが機能する
        }
    }

    resetProgressBar();
    fillProgressBar();
});




document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".slide");
    const progressBar = document.querySelector(".progress-bar");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 20; // スライド幅 + gap
    const transitionSpeed = 3;
    const intervalSpeed = 3000;
    let autoSlide;

    // スライドを複製して無限ループ
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderWrapper.appendChild(clone);
    });

    function updateProgressBar() {
        let progressPercentage = ((currentIndex % totalSlides) / (totalSlides - 1)) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function moveSlide(direction) {
        if (direction === "next") {
            currentIndex++;
        } else {
            currentIndex--;
        }

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        sliderWrapper.style.transition = `transform ${transitionSpeed}s ease-in-out`;
        sliderWrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

        updateProgressBar();

        setTimeout(() => {
            if (currentIndex >= totalSlides) {
                sliderWrapper.style.transition = "none";
                sliderWrapper.style.transform = `translateX(0)`;
                currentIndex = 0;
                updateProgressBar();
            }
        }, transitionSpeed * 1000);
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => moveSlide("next"), intervalSpeed);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // 自動スライド開始
    startAutoSlide();

    // ボタンイベント
    nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        moveSlide("next");
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        moveSlide("prev");
        startAutoSlide();
    });
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




