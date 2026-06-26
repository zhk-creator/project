export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateMobile = (mobile) =>
  /^[0-9]{10}$/.test(mobile);