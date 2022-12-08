import axios from 'axios';

axios.default.BASE_URL = 'https://6391c2d7b750c8d178cc7968.mockapi.io';
export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addNewContact = async (contactId = '') => {
  const { data } = await axios.post(`/contacts`, contactId);
  return data;
};

export const deleteSelectedContact = async (contactId = '') => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
