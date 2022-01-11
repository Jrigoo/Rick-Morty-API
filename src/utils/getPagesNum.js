export const getPagesNum = (currentPage, totalPages) => {
  let pages = [];
  let i = 1;
  let j = 0;
  const num = currentPage < 10 ? 8 : 5;

  while (i < num) {
    if (currentPage != 1 && currentPage != totalPages && j === 0) {
      pages.push(currentPage);
      j++;
    }

    if (currentPage - i > 0 && currentPage - i != 1) {
      pages.unshift(currentPage - i);
    }
    if (currentPage + i < totalPages) {
      pages.push(currentPage + i);
    }
    i++;
    if (pages.length >= num) {
      break;
    }
  }

  return pages;
};
