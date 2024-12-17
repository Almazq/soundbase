const burgerMenuIcon = document.querySelector('.navigation-icon-mobile');
const navigationList = document.querySelector('.navigation-list');

// Функция для переключения видимости меню
burgerMenuIcon.addEventListener('click', () => {
  // Переключаем класс 'active' у navigation-list
  navigationList.classList.toggle('active');
});