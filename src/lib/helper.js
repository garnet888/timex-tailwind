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

export const getParamsTable = (
  api,
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
  const fields = [];

  if (filterMap.size > 0) {
    filters += '&filters=[';

    Array.from(filterMap).forEach(([key, obj]) => {
      fields.push(`["${key}", "${obj.action}", "${obj.filtering}"]`);
    });

    fields.forEach((item, idx) => {
      filters += `${item},`;

      if (fields.length - 1 === idx) {
        filters += item;
      }
    });

    filters += ']';
  }

  // if (!_.isEmpty(filter)) {
  //   let sFields = [];

  //   Object.entries(filter).forEach(([key, value]) => {
  //     if (value.type === 'between') {
  //       if (value.filterType === 'date' || value.filterType === 'datetime') {
  //         sFields.push(
  //           `["${key}", "${value.type}", ["${value.filter}","${value.filterTo} 23:59:59%2B08:00"]]`
  //         );
  //       } else {
  //         sFields.push(
  //           `["${key}", "${value.type}", ["${value.filter}","${value.filterTo}"]]`
  //         );
  //       }
  //     }

  //     if (value.type === 'like' || value.type === '=') {
  //       sFields.push(`["${key}", "${value.type}", "${value.filter}"]`);
  //     }

  //     if (value.type === '>=') {
  //       sFields.push(`["${key}", "${value.type}", "${value.filter}"]`);
  //     }

  //     if (value.type === '<=') {
  //       sFields.push(`["${key}", "${value.type}", "${value.filterTo}"]`);
  //     }
  //   });

  //   if (pageAndSizeParm) {
  //     filters = `&`;
  //   } else {
  //     query = ``;
  //     filters = `?`;
  //   }
  //   filters += 'filters=[';
  //   sFields.forEach((el, index) => {
  //     filters += `${el}`;
  //     if (index !== sFields.length - 1) {
  //       filters += `,`;
  //     }
  //   });
  //   filters += `]`;
  // } else if (initParams) {
  //   setInitialParams();
  // }

  // if (code?.includes('?&filters')) {
  //   const initFilter = code.split('?');
  //   code = initFilter[0];
  //   filters += initFilter[1];
  // }

  // if (code?.includes('ref?')) {
  //   query = ``;
  // }

  query += customQuery;

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
