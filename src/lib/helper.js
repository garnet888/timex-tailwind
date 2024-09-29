import { apiList, callGet } from '@/axios/api';

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

export const fetchMenu = async (setMenu) => {
  const result = await callGet(apiList.permissionMenu);

  if (result) {
    let MENU = [];
    const resMenu = result.items?.filter((item) => item.is_menu);

    let _menu = {};

    resMenu.map((item) => {
      const parentId = item.parent_id;

      if (parentId) {
        if (_menu[parentId]) {
          if (_menu[parentId]['children']) {
            _menu[parentId]['children'].push(item);
          } else {
            _menu[parentId]['children'] = [];

            delete _menu[parentId]['link'];
          }
        }
      } else {
        _menu[item.id] = item;
      }
    });

    MENU = Object.values(_menu).sort((a, b) => a.sort_order - b.sort_order);

    console.log('MENU', MENU);
    setMenu(MENU);
  }
};
