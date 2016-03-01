import { combineReducers } from 'redux';
import { ACTIONS } from '../actions/actions'
import { findIndexById } from '../utils';

var contactsBackup;

function backUp(contacts) {
  console.log('backup');
  console.log(contacts)
  contactsBackup = contacts.slice(0);
  return contacts;
}

function restore() {  
  console.log('restoring');
  console.log(contactsBackup)
  return contactsBackup.slice(0);
}

function filterContacts(searchTerm) {
  let current;
  let regEx = new RegExp(searchTerm,'i');
  let output = [];
  for (current of contactsBackup) {
    if (regEx.test(current.name)) {
      output.push(current)
    }
  }
  return output;
}

function contacts(state = {}, action) {  
  let _contacts;
  switch (action.type) {

    case ACTIONS.CONTACTS_RESTORE:
      return restore();

    case ACTIONS.CONTACTS_REQUEST:
      return [];

    case ACTIONS.CONTACTS_RESPONSE:      
      return backUp(action.contacts);      

    case ACTIONS.CONTACT_DETAILS_RESPONSE:    
      _contacts = state.slice(0);
      let { id, details } = action;
      let index = findIndexById(id, _contacts);      
      if (index === -1) {        
        return console.log('contacts: invaliIndex')
      }         
      _contacts[index].mobile = details.mobile;
      _contacts[index].mail = details.mail;
      return _contacts;

    case ACTIONS.CONTACT_CREATE_RESPONSE:
      let { contact } = action;
      contact.id = action.id;
      _contacts = state.slice(0);
      _contacts.push(contact);
      return backUp(_contacts);      

    case ACTIONS.CONTACTS_FILTER:
      return filterContacts(action.searchTerm);

    default:
      return state
  }  
}

const contactsReducer = combineReducers({
  contacts
})

export default contactsReducer
