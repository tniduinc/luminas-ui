import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import css from "../../dist/luminas.css";
import { initPickers } from "./components/pickers";

// Inject CSS
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    initPickers();

    // Utility: High-End Easing
    const easePower = "power3.out";

    // 1. Navbar Entry
    gsap.from("nav .glass-panel", {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: easePower,
        delay: 0.2
    });

    // 2. Hero Text Stagger
    const heroText = document.querySelectorAll(".gsap-hero-text");
    if (heroText.length) {
        gsap.from(heroText, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: easePower,
            delay: 0.4
        });
    }

    // 3. Hero 3D Card Entry (Complex)
    const heroStack = document.querySelector(".gsap-hero-stack");
    if (heroStack) {
        gsap.from(heroStack, {
            x: 100,
            opacity: 0,
            rotationY: 45,
            scale: 0.8,
            duration: 1.8,
            ease: "power2.out",
            delay: 0.6
        });
    }

    // 4. General Reveal on Scroll
    gsap.utils.toArray(".gsap-reveal").forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            scale: 0.98,
            duration: 1,
            ease: easePower
        });
    });

    // 5. Stagger Grid Children
    gsap.utils.toArray(".gsap-stagger-grid").forEach(container => {
        const children = container.children;
        gsap.from(children, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    });

    // 6. Ambient Blob Float
    gsap.to(".animate-blob", {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        scale: "random(0.8, 1.2)",
        duration: "random(10, 20)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
            amount: 5,
            from: "random"
        }
    });

    // 7. Creative Spotlight Button Effect
    const spotlightButtons = document.querySelectorAll(".l-btn-spotlight");

    spotlightButtons.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set CSS variables for the spotlight gradient
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        });
    });

    // 8. Gradient Animation (Background Position)
    // Checks for elements with .animate-gradient class and animates their background
    const animatedGradients = document.querySelectorAll(".animate-gradient-bg");
    if (animatedGradients.length > 0) {
        gsap.to(animatedGradients, {
            backgroundPosition: "200% center",
            duration: 4,
            ease: "none",
            repeat: -1
        });
    }
});
