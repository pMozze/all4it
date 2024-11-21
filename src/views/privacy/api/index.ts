import api from '@/shared/api';

export const fetchPrivacyPolicy = async () => {
  return (await api.get<string>('/privacy')).data;
};
