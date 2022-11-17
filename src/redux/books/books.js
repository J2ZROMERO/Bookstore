const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';

const newBooks = [
  {
    id: 1, title: ' Three little pigs', author: 'Steave Royal', status: 'Sold',
  },
  {
    id: 2, title: ' Fly ', author: 'Carl Brend', status: 'Sold',
  }];

const AddRemoBook = (state = newBooks, action = {}) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, { id: action.id, title: action.title, author: action.author }];

    case REMOVED_BOOK:
      return state.filter((book) => book.id !== parseInt(action.id, 10));

    default: return state;
  }
};
const addBK = (payload) => ({
  type: ADDED_BOOK, id: payload.id, title: payload.title, author: payload.author,
});

const removeBK = (payload) => ({ id: payload.id, type: REMOVED_BOOK });

export { AddRemoBook, addBK, removeBK };