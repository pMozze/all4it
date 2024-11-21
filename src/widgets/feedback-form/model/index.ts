export interface FormData {
  name: string;
  email: string;
  companyName: string;
  phonenumber: string;
  comment: string;
}

export interface FeedbackFormResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof FormData]?: string[];
  };
}
