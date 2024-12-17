// A function animates numbers in counters when they appear in the viewport.
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const increment = target / 100; 

        const updateCounter = () => {
          count += increment;
          if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
            observer.unobserve(counter); 
          }
        };

        updateCounter();
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});