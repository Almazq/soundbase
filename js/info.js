document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.infoPage__menuBlock ul li');
    const textBlocks = document.querySelectorAll('.infoPage__textBlock-content');

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');

            menuItems.forEach(block => block.classList.remove('activeLi'));
            item.classList.add('activeLi');

            textBlocks.forEach(block => block.classList.remove('active'));

            const targetBlock = document.getElementById(targetId);
            if (targetBlock) {
                targetBlock.classList.add('active');
            }
        });
    });
});