const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';
const { produce } = require('immer');

const newBooks = [
  { id: 1, title: ' Three little pigs', author: 'Steave Royal' },
  { id: 2, title: ' Fly ', author: 'Carl Brend' }];

const AddRemoBook = (state = newBooks, action = {}) => {
  switch (action.type) {
    case ADDED_BOOK:
      console.log(newBooks);
      return [...state, { id: newBooks.length + 1, title: 'asdasda', author: 'action.author' }];

    case REMOVED_BOOK:
      return produce(state, () => {
        state.length -= 1;
      });

    default: return state;
  }
};
const addBK = () => ({ type: ADDED_BOOK });

const removeBK = () => ({ type: REMOVED_BOOK });

export { AddRemoBook, addBK, removeBK };