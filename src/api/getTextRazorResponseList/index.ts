import type {
  TextRazorApiResponse,
  TextRazorSuccessApiResponse,
} from '@/api/model';
import { TEXT_RAZOR_API_KEY } from '@/constants';

/**
 * @description Get TextRazor response for a list of sentences
 * @param listOfSentences - List of sentences to process
 * @returns List of TextRazor responses
 */
export const getTextRazorResponseList = async (
  listOfSentences: string[],
): Promise<Array<TextRazorSuccessApiResponse>> => {
  if (!listOfSentences.length) return [];

  // const sentences2Process = listOfSentences.slice(0, MAX_LINES_TO_PROCESS);
  const sentences2Process = listOfSentences;
  const textRazorResponseList: TextRazorSuccessApiResponse[] = [];

  for (const sentence of sentences2Process) {
    if (!sentence.trim()) continue;

    try {
      const textRazorResponse = await fetch<TextRazorApiResponse>(
        '/api/textrazor',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-TextRazor-Key': TEXT_RAZOR_API_KEY,
            'Accept-Encoding': 'gzip',
          },
          body: new URLSearchParams({
            extractors: 'entities',
            text: sentence,
          }).toString(),
        },
      ).then((res) => res.json());

      if (!textRazorResponse.ok) {
        // eslint-disable-next-line no-console
        console.error(`Error with TextRazor API, sentence: ${sentence}`);
        // eslint-disable-next-line no-console
        console.error(`error message: ${textRazorResponse?.error?.message}`);
        continue;
      } else
        textRazorResponseList.push({
          ...textRazorResponse,
          originalText: sentence,
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error with TextRazor API', error);
      throw error;
    }
  }

  return textRazorResponseList;
};
