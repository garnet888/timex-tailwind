export const setToken = (token, expires_in) => {
  const expiryDate = new Date(expires_in * 1000);

  localStorage.setItem('authToken', token);
  localStorage.setItem('tokenExp', expiryDate);
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

export const destroyTokens = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('tokenExp');
  localStorage.removeItem('_au');
  localStorage.removeItem('_role');

  window.location.replace('/');
};

export const getAuth = () => {
  let result = localStorage.getItem('_au');

  if (!result) return;

  return JSON.parse(result);
};

export const setAuth = (data) =>
  localStorage.setItem('_au', JSON.stringify(data));

export const setRole = (role) => {
  localStorage.setItem('_role', role);
};

export const getRole = () => {
  return localStorage.getItem('_role');
};

export const loggedIn = () => {
  return this.getToken() != null;
};
