import { type ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { useApp } from '@/context/app';
import { useToast } from '@/context/toast';

export const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const { isLoading, setListOfSentences } = useApp();
  const { showToast } = useToast();

  const handleFileChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files?.length) setSelectedFile(files[0]);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      showToast('Prosím, najprv vyberte súbor.', 'info');
      return;
    }

    const reader = new FileReader();

    reader.readAsText(selectedFile);
    reader.onload = ({ target }) => {
      const textResult = target?.result;
      if (!textResult || typeof textResult !== 'string') {
        showToast('Nepodarilo sa prečítať obsah súboru.', 'error');
        return;
      }

      setListOfSentences(textResult.split(/\r\n|\n/));
    };
    reader.onerror = () =>
      showToast('Nastala chyba pri čítaní súboru.', 'error');
  };

  return (
    <Card>
      <Card.Header as='h5'>1. Importovať Dáta</Card.Header>

      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId='formFile' className='mb-3'>
            <Form.Label>Vyber textový súbor:</Form.Label>

            <Form.Control
              type='file'
              accept='.txt'
              multiple={false}
              disabled={isLoading}
              onChange={handleFileChange}
            />
          </Form.Group>

          <Button variant='primary' type='submit' disabled={isLoading}>
            {isLoading ? 'Spracúvam...' : 'Spracovať súbor'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
