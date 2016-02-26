const contacts = [
  {
    id: 1,
    name: 'John Doe',
    mobile: '+44094375435',
    mail: 'johndoe@mail.com'
  },
  {
    id: 2,
    name: 'David Williams',
    mobile: '+440943454677',
    mail: 'davidwilliams@mail.com'
  }
];

export function getContacts() {
  return new Promise((resolve) => {
    let data = [];
    for (let current of contacts) {
      let {id, name} = current;
      data.push({ id, name});
    }
    return resolve(data);
  });  
}

export function getContact(id) {
  return new Promise((resolve) => {    
    for (let current of contacts) {
      if (current.id === id)
        return resolve(current);
    }
    return resolve({});
  });  
}