export const setToken = (token, expires_in) => {
  const expiryDate = new Date(expires_in * 1000);

  localStorage.setItem('AUTH_TOKEN', token);
  localStorage.setItem('TOKEN_EXP', expiryDate);
};

export const getToken = () => {
  return localStorage.getItem('AUTH_TOKEN');
};

export const destroyTokens = (gotoLogin = false) => {
  localStorage.removeItem('AUTH_TOKEN');
  localStorage.removeItem('TOKEN_EXP');
  localStorage.removeItem('ROLE');
  localStorage.removeItem('USER_STATUS');

  window.location.replace(gotoLogin ? '/login' : '/');
};

export const setRole = (role) => {
  localStorage.setItem('ROLE', role);
};

export const getRole = () => {
  return localStorage.getItem('ROLE');
};

export const setUserStatus = (status) => {
  localStorage.setItem('USER_STATUS', status);
};

export const getUserStatus = () => {
  return localStorage.getItem('USER_STATUS');
};
