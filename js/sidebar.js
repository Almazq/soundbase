const sidebar = document.querySelector('.sidebar');
const cartBtnHeader = document.querySelector('.navigation-link.cart');
const closeBtnSidebar = document.querySelector('.sidebar__content-close-btn');
const body = document.querySelector('body');


cartBtnHeader.addEventListener('click' , ()=>{
    sidebar.classList.toggle("open");
    body.classList.toggle("open-sidebar");
    
})
closeBtnSidebar.addEventListener('click' , ()=>{
    sidebar.classList.remove("open");
    body.classList.remove("open-sidebar");

})