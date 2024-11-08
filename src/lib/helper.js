import { apiList, callGet } from '@/axios/api';
import { filterActions } from './constants';
import { getToken } from './auth';

const SMALL_MENU_KEY = 'SMALL_MENU';

export const unauthPages = [
  '/',
  '/login',
  '/register',
  '/reset_password',
  '/reset_password/new_password',
  '/about',
  '/terms',
  '/privacy',
  '/TATAX',
];

export const checkAuthPage = () => {
  const pathname = window.location.pathname;

  if (getToken() || unauthPages.includes(pathname)) {
    return true;
  } else {
    return false;
  }
};

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
  const res = await callGet(apiList.permissionMenu);

  if (res && res?.items?.length > 0) {
    const isMenu = res.items.filter((item) => item.is_menu);

    let MENU = [];
    let _menu = {};

    isMenu.map((item) => {
      const parentID = item.parent_id;

      if (parentID) {
        if (_menu[parentID]) {
          if (!_menu[parentID].children) {
            _menu[parentID].children = [];

            delete _menu[parentID].link;
          }

          _menu[parentID].children.push(item);
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

export const getParamsTable = ({
  customQuery,
  filterMap,
  sortingCol,
  currentPage,
  pageSize,
  noPagination = false,
}) => {
  let query = noPagination
    ? '?no_paginate=1&is_excel=1'
    : `?page=${Number(currentPage) - 1}&size=${pageSize}`;

  let filters = '';
  const filterItems = [];

  if (filterMap.size > 0) {
    filters += '&filters=[';

    Array.from(filterMap).forEach(([key, obj]) => {
      if (
        obj.action === filterActions.CONTAINS ||
        obj.action === filterActions.EQUALS
      ) {
        filterItems.push(`["${key}", "${obj.action}", "${obj.filtering}"]`);
      }

      if (obj.action === filterActions.THAN_EQUAL) {
        const min = obj.filtering && `["${key}", ">=", "${obj.filtering}"]`;
        const max = obj.filteringTo && `["${key}", "<=", "${obj.filteringTo}"]`;

        filterItems.push(min + (min && max && ',') + max);
      }

      if (obj.action === filterActions.IN_RANGE) {
        filterItems.push(
          `["${key}", "${obj.action}", ["${obj.filtering}","${obj.filteringTo} 23:59:59%2B08:00"]]`
        );
      }
    });

    filters += String(filterItems) + ']';
  }

  const sortKey = Object.keys(sortingCol)[0];
  const sortType = sortingCol[sortKey];

  switch (sortType) {
    case 'asc':
      query += `&sort=${sortKey}`;
      break;
    case 'desc':
      query += `&sort=-${sortKey}`;
      break;

    default:
      break;
  }

  query += customQuery && `&${customQuery}`;

  return query + filters;
};

export const getIfEmpty = (value, enableNull = false) => {
  if (value) {
    return value;
  } else {
    return enableNull ? null : 'Хоосон';
  }
};

export function numberWithCommas(number) {
  try {
    let parts = number?.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '’');

    return parts.join('.');
  } catch (e) {
    return number;
  }
}

export const formatNumberSpace = (number) => {
  return number.replace(/(\d{2})(?=\d)/g, '$1 ');
};
