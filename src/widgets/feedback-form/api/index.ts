import api from '@/shared/api';
import { XiorError } from 'xior';
import { type FormData, type FeedbackFormResponse } from '../model';

export const postFeedbackForm = async (formData: FormData) => {
  try {
    const response = await api.post<FeedbackFormResponse>('/feedback', formData);
    return response.data;
  } catch (error: unknown) {
    return (error as XiorError<FeedbackFormResponse>).response!.data as FeedbackFormResponse;
  }
};
