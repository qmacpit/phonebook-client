import { combineReducers } from 'redux';
import { ACTIONS } from '../actions/actions'


function contacts(state = {}, action) {  
  switch (action.type) {
    case ACTIONS.CONTACTS_REQUEST:
      return [];
    case ACTIONS.CONTACTS_RESPONSE:
      return action.contacts;      
    default:
      return state
  }  
}

// function findIndexById(id, data) {
//   let i = 0, l = data.length, current;
//   for (; i < l; i++) {
//     if (data[i].id === id)
//       return i;
//   }
//   return -1;
// }

const contactsReducer = combineReducers({
  contacts
})

export default contactsReducer
