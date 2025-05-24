import { useMemo } from 'react';

import { useApp } from '@/context/app';

export type EntityTypeFrequencyData = {
  count: number;
  name: string;
};

export const useGetEntityTypeFrequencyData =
  (): Array<EntityTypeFrequencyData> => {
    const { textRazorResponseList } = useApp();

    return useMemo(() => {
      if (!textRazorResponseList.length) return [];

      const typeCounts: Record<string, number> = {};
      for (const textRazorItem of textRazorResponseList) {
        const entities = textRazorItem?.response?.entities;
        if (Array.isArray(entities)) {
          for (const entity of entities) {
            if (entity.type?.length) {
              for (const individualType of entity.type) {
                if (individualType?.trim() !== '')
                  typeCounts[individualType] =
                    (typeCounts[individualType] || 0) + 1;
              }
            }
          }
        }
      }

      return Object.entries(typeCounts)
        .map(([name, count]) => ({
          name, // os X
          count, // os Y
        }))
        .sort((a, b) => b.count - a.count);
    }, [textRazorResponseList]);
  };
