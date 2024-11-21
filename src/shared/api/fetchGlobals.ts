import api from '.';
import { type Global } from '../models/global';

export const fetchGlobals = async (locale: string) => {
  return (
    await api.get<Global>('/globals', {
      headers: {
        'Accept-Language': locale
      }
    })
  ).data;
};
