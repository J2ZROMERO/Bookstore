const ADDED_BOOK = 'ADDED_BOOK';
const REMOVED_BOOK = 'REMOVED_BOOK';
const { produce } = require('immer');

const newBooks = [
  { id: 1, title: ' Three little pigs', author: 'Steave Royal' },
  { id: 2, title: ' Fly ', author: 'Carl Brend' }];

const AddRemoBook = (state = newBooks, action = {}) => {
  switch (action.type) {
    case ADDED_BOOK:
      return produce(state, () => {
        state.push({ id: 3, title: ' Fly ', author: 'Carl Brend' });
      });
    case REMOVED_BOOK:
      return produce(state, () => {
        state.length -= 1;
      });

    default: return state;
  }
};
const addB = () => ({ type: ADDED_BOOK });

const removeB = () => ({ type: REMOVED_BOOK });

export { AddRemoBook, addB, removeB };