import type { TextRazorSuccessApiResponse as ITextRazorListItem } from '@/api/model';
import type { TextRazorEntity } from '@/model';

import { getHighlightedText } from './helpers/getHighlightedText';

export const TextRazorListItem = (textRazorListItem: ITextRazorListItem) => {
  const contentToDisplay = getHighlightedText(
    textRazorListItem.originalText,
    textRazorListItem.response?.entities || [],
  );

  return (
    <div className='mb-3'>
      <p style={{ whiteSpace: 'pre-wrap' }}>{contentToDisplay}</p>

      {Boolean(textRazorListItem.response?.entities?.length) && (
        <>
          <p className='mb-1' style={{ fontSize: '0.9em' }}>
            <strong>(Debug Info) Nájdené entity:</strong>
          </p>

          <ul
            style={{
              fontSize: '0.9em',
              paddingLeft: '20px',
              listStyleType: 'disc',
            }}
          >
            {textRazorListItem.response.entities.map(
              (entity: TextRazorEntity, entityIndex: number) => (
                <li key={`entity-detail-${entity.id || entityIndex}`}>
                  {entity.matchedText} (Typ: {entity.type?.join(', ') ?? 'N/A'})
                </li>
              ),
            )}
          </ul>
        </>
      )}

      {!textRazorListItem.response?.entities?.length && (
        <p style={{ fontStyle: 'italic', fontSize: '0.9em' }}>
          Pre tento text neboli nájdené žiadne entity (podľa API).
        </p>
      )}
    </div>
  );
};
