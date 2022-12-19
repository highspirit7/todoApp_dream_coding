const localStorage = window.localStorage;

const getItemAndParse = (key) => {
  const item = localStorage.getItem(key);

  if (item === null) {
    return null;
  } else {
    const parsedItem = JSON.parse(item);
    return parsedItem;
  }
};

export { getItemAndParse };
