document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const button = dropdown.querySelector(".dropdown__button");
    const arrow = document.querySelector('.dropdown__button-arrow');
    button.addEventListener("click", () => {
        dropdown.classList.toggle("open");
        arrow.classList.toggle("open-arrow");

    });

    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
            arrow.classList.remove("open-arrow");

        }
    });
});