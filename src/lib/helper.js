const SMALL_MENU_KEY = 'SMALL_MENU';

export const getSmallMenu = () => {
  return localStorage.getItem(SMALL_MENU_KEY);
};

export const enableSmallMenu = () => {
  localStorage.setItem(SMALL_MENU_KEY, 'YES');
};

export const disableSmallMenu = () => {
  localStorage.removeItem(SMALL_MENU_KEY);
};
