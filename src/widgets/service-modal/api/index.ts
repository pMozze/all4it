import api from '@/shared/api';

import { type Service } from '../model';

export const fetchService = async (id: number) => {
  return (await api.get<Service>(`/services/${id}`)).data;
};
