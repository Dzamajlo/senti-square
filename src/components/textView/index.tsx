import Card from 'react-bootstrap/Card';

import { useApp } from '@/context/app';

import { TextRazorListItem } from './components/textRazorListItem';

export const TextView = () => {
  const { textRazorResponseList } = useApp();

  return (
    <Card>
      <Card.Header as='h5'>2. Processed Texts with Entities</Card.Header>

      <Card.Body>
        {textRazorResponseList.length ? (
          textRazorResponseList.map((item) => (
            <TextRazorListItem
              key={`text-razor-list-item-${item.response?.entities[0]?.id}`}
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
