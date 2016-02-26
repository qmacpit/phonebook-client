import { combineReducers } from 'redux';
import { ACTIONS } from '../actions/actions'
import { findIndexById } from '../utils';

function contacts(state = {}, action) {  
  switch (action.type) {

    case ACTIONS.CONTACTS_REQUEST:
      return [];

    case ACTIONS.CONTACTS_RESPONSE:
      return action.contacts;      

    case ACTIONS.CONTACT_DETAILS_RESPONSE:    
      let _contacts = state.slice(0);
      let { id ,details } = action;
      let index = findIndexById(id, _contacts);      
      if (index === -1) {        
        return console.log('contacts: invaliIndex')
      }   
      _contacts[index].details = details;
      return _contacts;

    default:
      return state
  }  
}

const contactsReducer = combineReducers({
  contacts
})

export default contactsReducer
