import Card from 'react-bootstrap/Card';

import { useApp } from '@/context/app';

import { TextRazorListItem } from './components/textRazorListItem';

export const TextView = () => {
  const { textRazorResponseList } = useApp();

  return (
    <Card>
      <Card.Header as='h5'>2. Spracované Texty s Entitami</Card.Header>

      <Card.Body>
        {textRazorResponseList.length ? (
          textRazorResponseList.map((item, index) => (
            <TextRazorListItem
              key={`text-razor-list-item-${index}-${item.response?.entities?.[0]?.id ?? 'no-entities'}`}
              {...item}
            />
          ))
        ) : (
          <p>Žiadne dáta na zobrazenie. Nahrajte a spracujte súbor.</p>
        )}
      </Card.Body>
    </Card>
  );
};
