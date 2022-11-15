const ADDED_BOOK = "ADDED_BOOK";
const REMOVED_BOOK = "REMOVED_BOOK";


const AddRemoBook = (state = [], action = {})=> { 
    switch(action.type){
case ADDED_BOOK:
return [{...rest,bookAdded: 1++}];
case REMOVED_BOOK:
    return [{...rest,bookAdded: 1--}];
    
    default: return state;
    
}
}
const addB = () => {return {type: ADDED_BOOK} }

const removeB = () => {return {type: REMOVED_BOOK} }

export default {AddRemoBook,addB,removeB};