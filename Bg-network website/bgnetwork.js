
// =======================================================
// BG-NETWORK WEBSITE JAVASCRIPT
// =======================================================

document.addEventListener("DOMContentLoaded", () => {

    // =======================================================
    // MOBILE MENU
    // =======================================================

    const menu = document.getElementById("mobileMenu");
    const navbar = document.getElementById("navbar");

    if (menu && navbar) {

        menu.addEventListener("click", () => {
            navbar.classList.toggle("active");
            menu.classList.toggle("open");
        });

        navbar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
                menu.classList.remove("open");
            });
        });
    }


    // =======================================================
    // STICKY HEADER
    // =======================================================

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // =======================================================
    // HERO SLIDER
    // =======================================================

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let currentSlide = 0;
    let sliderInterval;

    function showSlide(index){

        if(slides.length === 0) return;

        slides.forEach(slide=>{
            slide.classList.remove("active");
        });

        dots.forEach(dot=>{
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");

        if(dots[index]){
            dots[index].classList.add("active");
        }

        currentSlide = index;
    }

    function nextSlide(){

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }

    function previousSlide(){

        currentSlide--;

        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    }

    function startSlider(){

        sliderInterval = setInterval(() => {

            nextSlide();

        },5000);

    }

    function restartSlider(){

        clearInterval(sliderInterval);
        startSlider();

    }

    if(next){

        next.addEventListener("click",()=>{

            nextSlide();
            restartSlider();

        });

    }

    if(prev){

        prev.addEventListener("click",()=>{

            previousSlide();
            restartSlider();

        });

    }

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            showSlide(index);
            restartSlider();

        });

    });

    if(slides.length > 0){

        showSlide(0);
        startSlider();

    }


    // =======================================================
    // IMPACT COUNTERS
    // =======================================================

    const counters = document.querySelectorAll(".counter");

    if(counters.length){

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    const counter = entry.target;

                    const target = Number(counter.dataset.target);

                    let count = 0;

                    const speed = Math.ceil(target / 100);

                    const timer = setInterval(()=>{

                        count += speed;

                        if(count >= target){

                            count = target;

                            clearInterval(timer);

                        }

                        counter.textContent = count.toLocaleString();

                    },20);

                    observer.unobserve(counter);

                }

            });

        },{

            threshold:0.5

        });

        counters.forEach(counter=>{

            observer.observe(counter);

        });

    }


    // =======================================================
    // SMOOTH SCROLL
    // =======================================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});


// =======================================================
// PRELOADER
// =======================================================

window.addEventListener("load",()=>{

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.transition="opacity .4s ease";

        preloader.style.opacity="0";

        setTimeout(()=>{

            preloader.style.display="none";

        },600);

    }

});


/*=========================================
    BG-NETWORK
    Mission | Vision | SWOT | Core Values
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
        SCROLL REVEAL
    ==============================*/

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            } else {

                entry.target.classList.remove("active");

            }

        });

    }, {
        threshold: 0.15
    });

    reveals.forEach((item) => observer.observe(item));



    /*==============================
        STAGGER CARD ANIMATION
    ==============================*/

    const cards = document.querySelectorAll(
        ".mission-card, .swot-card, .value-card"
    );

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.12}s`;

    });



    /*==============================
        ICON ANIMATION
    ==============================*/

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            const icon = card.querySelector(".icon, .swot-icon, .value-icon");

            if (icon) {

                icon.style.transform = "rotate(360deg) scale(1.15)";

            }

        });

        card.addEventListener("mouseleave", () => {

            const icon = card.querySelector(".icon, .swot-icon, .value-icon");

            if (icon) {

                icon.style.transform = "rotate(0deg) scale(1)";

            }

        });

    });



    /*==============================
        TITLE ANIMATION
    ==============================*/

    const titles = document.querySelectorAll(".section-title h2");

    titles.forEach((title) => {

        title.addEventListener("mouseenter", () => {

            title.style.color = "#1b8a3d";

            title.style.letterSpacing = "2px";

            title.style.transition = "0.4s";

        });

        title.addEventListener("mouseleave", () => {

            title.style.color = "";

            title.style.letterSpacing = "";

        });

    });



    /*==============================
        PARAGRAPH FADE EFFECT
    ==============================*/

    const paragraphs = document.querySelectorAll(

        ".mission-card p, .swot-card p, .value-card p"

    );

    paragraphs.forEach((paragraph) => {

        paragraph.addEventListener("mouseenter", () => {

            paragraph.style.transition = "0.4s";

            paragraph.style.color = "#222";

        });

        paragraph.addEventListener("mouseleave", () => {

            paragraph.style.color = "";

        });

    });



    /*==============================
        OBJECTIVE LIST EFFECT
    ==============================*/

    const objectives = document.querySelectorAll(".objective-list li");

    objectives.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            item.style.transform = "translateX(8px)";

            item.style.transition = ".3s ease";

        });

        item.addEventListener("mouseleave", () => {

            item.style.transform = "translateX(0)";

        });

    });

});



/*=========================================
    FLOATING ANIMATION
=========================================*/

const floatingIcons = document.querySelectorAll(
    ".icon, .swot-icon, .value-icon"
);

floatingIcons.forEach((icon) => {

    let direction = 1;

    setInterval(() => {

        icon.style.transform = `translateY(${direction * 6}px)`;

        direction *= -1;

    }, 1800);

});



/*=========================================
    RIPPLE HOVER EFFECT
=========================================*/

const allCards = document.querySelectorAll(
    ".mission-card, .swot-card, .value-card"
);

allCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(27,138,61,.08),
            #ffffff 70%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#ffffff";

    });

});



/*=========================================
SMOOTH SECTION APPEAR
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll("section").forEach((section) => {

        section.style.opacity = "1";

        section.style.transition = "opacity .8s ease";

    });

});


/* =========================================================
   BG-NETWORK PROFESSIONAL SCROLL ANIMATION
========================================================= */
document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return;

    /* Modern scroll reveal using IntersectionObserver */
    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        /* Fallback for older browsers */
        revealElements.forEach((element) => {
            element.classList.add("reveal-active");
        });

    }
});





document.addEventListener("DOMContentLoaded", function () {

    const animatedElements = document.querySelectorAll(
        ".section-title, .mission-card, .swot-card, .value-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -60px 0px"
        }
    );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

});



// ============================================================
// BRIGHTER GENERATION NETWORK (BG-NETWORK)
// BOARD OF TRUSTEES - JAVASCRIPT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    const stage = document.querySelector(".trustees-stage");
    const cards = document.querySelectorAll(".trustee-card");

    const nextButton = document.getElementById("nextBtn");
    const previousButton = document.getElementById("previousBtn");

    if (!stage || !cards.length) {
        return;
    }

    let currentPosition = 0;

    let autoRotation;

    let isPaused = false;

    let touchStartX = 0;

    let touchEndX = 0;


    // ========================================================
    // SETTINGS
    // ========================================================

    const settings = {

        // Distance of trustees from the centre
        radius: 295,

        // Automatic rotation speed
        interval: 4500,

        // Rotation transition
        transition: 700

    };


    // ========================================================
    // CHECK DESKTOP
    // ========================================================

    function isDesktop() {

        return window.innerWidth > 700;

    }


    // ========================================================
    // POSITION TRUSTEES IN A CIRCLE
    // ========================================================

    function positionTrustees() {

        if (!isDesktop()) {

            cards.forEach(card => {

                card.style.transform = "";

                card.style.left = "";
                card.style.top = "";

            });

            return;
        }


        const totalCards = cards.length;


        cards.forEach((card, index) => {

            let position =
                (index + currentPosition) % totalCards;


            if (position < 0) {

                position += totalCards;

            }


            // Calculate circular angle
            const angle =
                (position / totalCards) * 360 - 90;


            // Convert angle to radians
            const radians =
                angle * Math.PI / 180;


            // Calculate X and Y position
            const x =
                Math.cos(radians) * settings.radius;


            const y =
                Math.sin(radians) * settings.radius;


            // Apply circular position
            card.style.left = "50%";
            card.style.top = "50%";


            card.style.transform =
                `translate(-50%, -50%)
                 translate(${x}px, ${y}px)`;


            // Highlight card at top
            if (position === 0) {

                card.style.zIndex = "20";

            } else {

                card.style.zIndex = "5";

            }

        });

    }


    // ========================================================
    // NEXT TRUSTEE
    // ========================================================

    function nextTrustee() {

        currentPosition++;

        positionTrustees();

    }


    // ========================================================
    // PREVIOUS TRUSTEE
    // ========================================================

    function previousTrustee() {

        currentPosition--;

        positionTrustees();

    }


    // ========================================================
    // BUTTON EVENTS
    // ========================================================

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextTrustee
        );

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            previousTrustee
        );

    }


    // ========================================================
    // AUTOMATIC ROTATION
    // ========================================================

    function startAutoRotation() {

        stopAutoRotation();


        autoRotation = setInterval(() => {

            if (!isPaused && isDesktop()) {

                nextTrustee();

            }

        }, settings.interval);

    }


    function stopAutoRotation() {

        if (autoRotation) {

            clearInterval(autoRotation);

            autoRotation = null;

        }

    }


    // Start automatic animation
    startAutoRotation();


    // ========================================================
    // PAUSE WHEN MOUSE ENTERS BOARD
    // ========================================================

    stage.addEventListener(
        "mouseenter",
        () => {

            isPaused = true;

        }
    );


    stage.addEventListener(
        "mouseleave",
        () => {

            isPaused = false;

        }
    );


    // ========================================================
    // TOUCH / SWIPE SUPPORT
    // ========================================================

    stage.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    stage.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;


            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;


        // Swipe left
        if (swipeDistance < -50) {

            nextTrustee();

        }


        // Swipe right
        if (swipeDistance > 50) {

            previousTrustee();

        }

    }


    // ========================================================
    // KEYBOARD CONTROL
    // ========================================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "ArrowRight") {

                nextTrustee();

            }


            if (event.key === "ArrowLeft") {

                previousTrustee();

            }

        }
    );


    // ========================================================
    // HANDLE SCREEN RESIZE
    // ========================================================

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);


            resizeTimer = setTimeout(() => {

                positionTrustees();

            }, 150);

        }
    );


    // ========================================================
    // TRUSTEE CARD HOVER EFFECT
    // ========================================================

    cards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                isPaused = true;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                isPaused = false;

            }
        );

    });


    // ========================================================
    // INITIALISE
    // ========================================================

    positionTrustees();


    // ========================================================
    // MAKE TRUSTEE IMAGES LOAD SMOOTHLY
    // ========================================================

    const images =
        document.querySelectorAll(
            ".trustee-image img"
        );


    images.forEach(image => {

        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "image-loaded"
                );

            }
        );

    });


    // ========================================================
    // OPTIONAL: STOP ANIMATION WHEN TAB IS NOT ACTIVE
    // ========================================================

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                stopAutoRotation();

            } else {

                startAutoRotation();

            }

        }
    );

});