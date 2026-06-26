export const setLS = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLS = (key) =>
  JSON.parse(localStorage.getItem(key));