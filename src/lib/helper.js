const SMALL_MENU_KEY = 'SMALL_MENU';

export const getSmallMenu = () => {
  return window.localStorage.getItem(SMALL_MENU_KEY);
};

export const enableSmallMenu = () => {
  window.localStorage.setItem(SMALL_MENU_KEY, 'YES');
};

export const disableSmallMenu = () => {
  window.localStorage.removeItem(SMALL_MENU_KEY);
};
