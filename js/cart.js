const couponBlock = document.querySelector('.cart-page__content-price-coupon-form');
const couponOpenBtn = document.querySelector('.cart-page__content-price-coupon-arrow');

couponOpenBtn.addEventListener('click', () => {
    couponBlock.classList.toggle('open');
});