export const lengthValidation = (str, length) => {
  return str.length > length;
};
export const duplicateNameValidation = (store, newItemName) => {
  return !store.some((existItem) => existItem.name === newItemName);
};
