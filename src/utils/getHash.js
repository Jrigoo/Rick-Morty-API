export const getHash = () => {
  return location.hash
    ? location.hash.includes("?")
      ? location.pathname
      : location.hash.split("/")[1].toLocaleLowerCase()
    : location.pathname;
};
