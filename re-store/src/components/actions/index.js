const booksLoaded = newBooks => {
  return {
    type: 'BOOKS_LOADED',
    paylosd: newBooks
  };
};

export {
  booksLoaded
}
