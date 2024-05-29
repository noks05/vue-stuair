
export default function activeBurger() {
  const burgerEnable = document?.querySelector('[data-burger-enable]');
  const burgerDisable = document?.querySelector('[data-burger-disable]');
  const menu = document?.querySelector('[data-menu]');
  const menuBox = document?.querySelector('[data-menu-box]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');

  burgerEnable?.addEventListener('click', (e) => {
    menu?.classList.toggle('menu--active');
  });

  burgerDisable?.addEventListener('click', (e) => {
    menu?.classList.toggle('menu--active');
  });

  menu?.addEventListener('click', (e) => {
    if (menuBox.contains(e.target)) return
    menu.classList.remove('menu--active');
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      menu.classList.remove('menu--active');
    });
  });
}
