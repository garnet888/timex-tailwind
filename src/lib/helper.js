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
