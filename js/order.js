
const fullAdressShowTxt = document.querySelector('.order-content__infoBlock-showTxt');
const fullAdressBlock = document.querySelector('.order-content__infoBlock-fulladressBlock-hiddenBlock');
const checkbox = document.getElementById('note-checkbox');
const textaresBlock = document.querySelector('.order-content__infoBlock-textaresBlock');
const couponBlock = document.querySelector('.order-content__listBlock-price-coupon-form');
const couponOpenBtn = document.querySelector('.order-content__listBlock-price-coupon-arrow');
const listOpenBtn = document.querySelector('.order-content__listBlock-openBtn');
const list = document.querySelector('.order-content__listBlock-list');


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


listOpenBtn.addEventListener('click' , ()=>{
    list.classList.toggle('open');
    listOpenBtn.classList.toggle('open');
    
})
couponOpenBtn.addEventListener('click', () => {
    couponBlock.classList.toggle('open');
    couponOpenBtn.classList.toggle('open');
});

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        textaresBlock.classList.toggle('show');
    } else {
        textaresBlock.classList.remove('show');
    }
});

fullAdressShowTxt.addEventListener('click' , ()=>{
    fullAdressBlock.classList.toggle('open')
})