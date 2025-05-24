import type { TextRazorEntity } from '@/model';

/** @description Mock data for textRazorEntities, textRazorEntities is data from TextRazor API */
export const textRazorEntitiesMock: {
  textRazorEntities: TextRazorEntity[];
  originalText: string;
} = {
  originalText:
    'The hygiene package has given rise to debate in several Member States, including Sweden.',
  textRazorEntities: [
    {
      id: 0,
      entityId: 'Hygiene',
      matchedText: 'hygiene',
      startingPos: 4,
      endingPos: 11,
    },
    {
      id: 1,
      type: ['Place', 'PopulatedPlace', 'Country'],
      entityId: 'Sweden',
      matchedText: 'Sweden',
      startingPos: 81,
      endingPos: 87,
    },
  ],
};
