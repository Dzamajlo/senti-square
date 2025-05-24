import type { TextRazorEntity } from '@/model';

export type TextRazorSuccessApiResponse = {
  originalText: string;
  time: number;
  ok: true;
  response: {
    language: string;
    entities: TextRazorEntity[];
    languageIsReliable: boolean;
  };
};

export type TextRazorErrorApiResponse = {
  originalText: string;
  ok: false;
  error: {
    statusText?: string;
    status?: number;
    message: string;
  };
};

export type TextRazorApiResponse =
  | TextRazorSuccessApiResponse
  | TextRazorErrorApiResponse;
