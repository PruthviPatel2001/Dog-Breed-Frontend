export const addItemToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const updateItemInLocalStorage = (key: string, value: string) => {
  const item = getItemFromLocalStorage(key);
  if (item) {
    console.log("item", item);
    removeItemFromLocalStorage(key);
    addItemToLocalStorage(key, value);
  } else {
    addItemToLocalStorage(key, value);
  }
};
