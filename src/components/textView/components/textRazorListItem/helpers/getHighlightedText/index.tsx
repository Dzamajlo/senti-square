import type { ReactElement } from 'react';

import type { TextRazorEntity } from '@/model';

export const getHighlightedText = (
  originalText: string,
  entities: TextRazorEntity[],
): Array<string | ReactElement> => {
  if (!entities?.length) return [originalText];

  let segments: Array<string | ReactElement> = [originalText];
  let keyCounter = 0;

  Array.from(new Set(entities.map(({ matchedText }) => matchedText)))
    .sort((a, b) => b.length - a.length)
    .forEach((searchText) => {
      if (!searchText) return;

      const newSegments: Array<string | ReactElement> = [];

      segments.forEach((segment) => {
        if (typeof segment === 'string') {
          const parts = segment.split(searchText);

          parts.forEach((part, i) => {
            newSegments.push(part);

            if (i < parts.length - 1)
              newSegments.push(
                <mark
                  style={{ fontWeight: 'bold' }}
                  key={`mark-${searchText}-${keyCounter++}`}
                >
                  {searchText}
                </mark>,
              );
          });
        } else newSegments.push(segment);
      });

      segments = newSegments;
    });

  return segments;
};
