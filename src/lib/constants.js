const dataType = {
  TEXT: 'text',
  NUMBER: 'number',
  DATE: 'date',
  DATETIME: 'datetime',
  AMOUNT: 'amount',
  PASSWORD: 'password',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
  SET: 'set',
  BASE64: 'base64',
  SEPARATOR: 'separator',
};

const dateFormats = {
  WITHOUT_TIME: 'YYYY-MM-DD',
  WITH_TIME: 'YYYY-MM-DD HH:mm:ss',
};

const filterActions = {
  EQUALS: '=',
  CONTAINS: 'like',
  IN_RANGE: 'between',
};

export { dataType, dateFormats, filterActions };
