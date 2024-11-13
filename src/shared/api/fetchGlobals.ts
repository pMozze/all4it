import api from '.';
import { type Global } from '../models/global';

export const fetchGlobals = async () => {
  return (await api.get<Global>('/globals')).data;
};
