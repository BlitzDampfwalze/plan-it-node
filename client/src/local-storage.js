export const loadAuthToken = () => {
  return localStorage.getItem('authToken');
};

//try//attempting to save a value to localStorage will throw an exception in Safari
export const saveAuthToken = authToken => {
  try {
      localStorage.setItem('authToken', authToken);
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
      localStorage.removeItem('authToken');
  } catch (e) {}
};