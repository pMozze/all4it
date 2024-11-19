export interface FormData {
  name: string;
  email: string;
  comment: string;
}

export interface FeedbackFormResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof FormData]?: string[];
  };
}
