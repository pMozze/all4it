import api from '@/shared/api';
import { Project } from '../model';

export const fetchProject = async (id: number) => {
  try {
    return (await api.get<Project>(`/projects/${id}`)).data;
  } catch (error) {
    return null;
  }
};
