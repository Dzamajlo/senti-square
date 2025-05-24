import type { TextRazorSuccessApiResponse as ITextRazorResponseListItem } from '@/api/model';
import { textRazorEntitiesMock } from '@/mocks/textRazorEntities';

/** @description Mock data for textRazorResponseList */
export const textRazorResponseListMock: ITextRazorResponseListItem[] = [
  {
    originalText: textRazorEntitiesMock.originalText,
    response: {
      language: 'eng',
      languageIsReliable: true,
      entities: textRazorEntitiesMock.textRazorEntities,
    },
    time: 0.004341,
    ok: true,
  },
];
