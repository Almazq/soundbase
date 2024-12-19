document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav__item");
    const contentBlocks = document.querySelectorAll(".content__block");
    const orderBtn = document.querySelectorAll('.order-btn');
    const orderInfoBlock = document.querySelector('#order-info');
    const userPayInfoBlock = document.querySelector('.user-payinfoBlock');

    orderBtn.forEach((item) =>{
      item.addEventListener('click' ,()=>{
        contentBlocks.forEach((block) => block.classList.remove("content__block--active"));
        userPayInfoBlock.classList.add('activeBlock')
        orderInfoBlock.classList.add('content__block--active');
      })
    })
    document.querySelector(".profilePage__nav").addEventListener("click", (event) => {
      const target = event.target;
  
      if (target.classList.contains("nav__item")) {

        navItems.forEach((item) => item.classList.remove("nav__item--active"));
        userPayInfoBlock.classList.remove('activeBlock')

        target.classList.add("nav__item--active");
  
        contentBlocks.forEach((block) => block.classList.remove("content__block--active"));
  
        const contentId = target.dataset.target;
        document.getElementById(contentId).classList.add("content__block--active");
      }
    });

    const passwordInput = document.getElementById("password-input");
    const togglePasswordButton = document.querySelector(".input-passshowBtn");
    
    togglePasswordButton.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      togglePasswordButton.textContent = isPassword ? "Скрыть" : "Показать";
    });
  });