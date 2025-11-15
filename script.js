/* ================================
   MOBILE MENU
================================ */
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});

/* Fermer le menu mobile quand on clique sur un lien */
document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.style.display = "none";
    });
});


/* ================================
   FAQ INTERACTIVE
================================ */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;

        // Toggle display
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

        // Optional: rotate arrow (if you add icons)
        btn.classList.toggle("open");
    });
});


/* ================================
   SCROLL REVEAL
================================ */
const revealElements = document.querySelectorAll(
    ".fade-in, .fade-in-delayed, .hover-up, .process-step, .card"
);

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================================
   HERO PARALLAX
================================ */
const heroImg = document.querySelector(".mac-img");
const chatBubble = document.querySelector(".chat-bubble");

window.addEventListener("mousemove", (e) => {
    if (!heroImg) return;

    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    heroImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if (chatBubble) {
        chatBubble.style.transform = `translate(${moveX * 0.6}px, ${
            moveY * 0.6
        }px)`;
    }
});


/* ================================
   SMOOTH HOVER UTILITY
================================ */
document.querySelectorAll(".hover-up").forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.style.transform = "translateY(-6px)";
    });

    el.addEventListener("mouseout", () => {
        el.style.transform = "translateY(0)";
    });
});
