import { getContacts } from '../services/dataService';

export const ACTIONS = {
  CONTACTS_REQUEST: 'contacts_req',
  CONTACTS_RESPONSE: 'contacts_res',
};

function contactsRequest() {
  return {
    type: ACTIONS.CONTACTS_REQUEST,
    contacts: []
  }
}

function contactsResponse(contacts) {
  return {
    type: ACTIONS.CONTACTS_RESPONSE,
    contacts
  }
}

function performGetContacts() {
  return dispatch => {
    dispatch(contactsRequest())
    return getContacts()    
    .then(contacts => dispatch(contactsResponse(contacts)));
  }  
}

export function contacts() {
  return (dispatch, getState) => {
    let state = getState();
    if (!state.contacts || !state.contacts.length)
      return dispatch(performGetContacts());    
  }  
}