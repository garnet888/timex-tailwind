import { apiList, callGet } from '@/axios/api';
import { filterActions } from './constants';

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

export const getParamsTable = (
  customQuery,
  filterMap,
  currentPage,
  pageSize,
  noPagination = false
) => {
  let query = noPagination
    ? '?no_paginate=1&is_excel=1'
    : `?page=${Number(currentPage) - 1}&size=${pageSize}`;

  // if (sort) {
  //   query += `&sort=${sort.sort}${sort.colId}`;
  // }

  let filters = '';
  const values = [];

  if (filterMap.size > 0) {
    filters += '&filters=[';

    Array.from(filterMap).forEach(([key, obj]) => {
      if (
        obj.action === filterActions.CONTAINS ||
        obj.action === filterActions.EQUALS
      ) {
        values.push(`["${key}", "${obj.action}", "${obj.filtering}"]`);
      }

      if (obj.action === filterActions.THAN_EQUAL) {
        values.push(
          `["${key}", ">=", "${obj.filtering}"],["${key}", "<=", "${obj.filteringTo}"]`
        );
      }

      if (obj.action === filterActions.IN_RANGE) {
        values.push(
          `["${key}", "${obj.action}", ["${obj.filtering}","${obj.filteringTo} 23:59:59%2B08:00"]]`
        );
      }
    });

    filters += String(values) + ']';
  }

  query += `&${customQuery}`;

  return query + filters;
};

export const getValue = (value, enableNull = false) => {
  if (value) {
    return value;
  } else {
    return enableNull ? null : 'Хоосон';
  }
};

export const formatNumberSpace = (number) => {
  return number.replace(/(\d{2})(?=\d)/g, '$1 ');
};
