export const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key) => {
  const storedValue = localStorage.getItem(key);

  return storedValue ? JSON.parse(storedValue) : undefined;
};

export const removeStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const getDeviceTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
