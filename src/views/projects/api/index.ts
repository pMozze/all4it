import api from '@/shared/api';
import { Project } from '../model';

export const fetchProjects = async () => {
  return (await api.get<Project[]>('/projects')).data;
};
