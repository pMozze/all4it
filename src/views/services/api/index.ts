import api from '@/shared/api';
import { Service } from '../model';

export const fetchServices = async () => {
  return (await api.get<Service[]>('/services')).data;
};
