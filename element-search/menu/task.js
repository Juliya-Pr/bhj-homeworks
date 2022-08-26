const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
  let menuLink = menuLinks[i];
  let menuItem = menuLink.closest('.menu__item');
  const menuSub = menuItem.querySelector('.menu_sub');
  console.log(menuSub);

  menuLink.onclick = function() {
    if(menuSub) {
      menuSub.classList.toggle('menu_active');
      return false;
    }
  }
}
