import api from '@/shared/api';
import { Homepage } from '../model';

export const fetchHomePage = async () => {
  return (await api.get<Homepage>('/homepage')).data;
};
