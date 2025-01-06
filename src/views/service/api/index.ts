import api from '@/shared/api';
import { Project } from '../model';

export const fetchService = async (id: number) => {
  try {
    return (await api.get<Project>(`/services/${id}`)).data;
  } catch (error) {
    return null;
  }
};
