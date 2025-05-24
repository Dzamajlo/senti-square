import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ChartsDashboard } from '@/components/dashboard';
import { FileUploadForm } from '@/components/fileUpload';
import { NavigationBar } from '@/components/navigation';
import { TextView } from '@/components/textView';

export const App = () => (
  <main>
    <NavigationBar />

    <Container fluid style={{ marginTop: '20px' }}>
      <Row className='mb-3'>
        <Col>
          <FileUploadForm />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <TextView />
        </Col>

        <Col md={6}>
          <ChartsDashboard />
        </Col>
      </Row>
    </Container>
  </main>
);
