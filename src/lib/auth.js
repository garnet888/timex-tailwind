export default class Auth {
  static setToken(token, expires_in) {
    let expiryDate = new Date(expires_in * 1000);
    localStorage.setItem('authToken', token);
    localStorage.setItem('tokenExp', expiryDate);
  }

  static setRole(role) {
    localStorage.setItem('_role', role);
  }

  static destroyToken() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExp');
    localStorage.removeItem('_au');
    localStorage.removeItem('_role');
  }

  static getToken() {
    return localStorage.getItem('authToken');
  }

  static getRole() {
    return localStorage.getItem('_role');
  }

  static loggedIn() {
    return this.getToken() != null;
  }
}

export const getAuth = () => {
  let result = localStorage.getItem('_au');

  if (!result) return;

  return JSON.parse(result);
};

export const setAuth = (data) =>
  localStorage.setItem('_au', JSON.stringify(data));
