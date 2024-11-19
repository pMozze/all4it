import api from '@/shared/api';

import { type Contacts } from '../models';

export const fetchContacts = async () => {
  return (await api.get<Contacts>('/contacts')).data;
};
