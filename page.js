document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navlinks = document.querySelector(".nav-links");

    if (!hamburger || !navlinks) return;

    const setMenuState = (isOpen) => {
        navlinks.classList.toggle("active", isOpen);
        hamburger.classList.toggle("toggle", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    };

    hamburger.addEventListener("click", () => {
        const isOpen = !navlinks.classList.contains("active");
        setMenuState(isOpen);
    });

    hamburger.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            const isOpen = !navlinks.classList.contains("active");
            setMenuState(isOpen);
        }
    });

    navlinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });
});