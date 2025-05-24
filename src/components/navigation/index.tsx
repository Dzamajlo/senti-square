import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavigationBar = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Container className='d-flex justify-content-center'>
      <Navbar.Brand>TextRazor Analyzér Dashboard</Navbar.Brand>
    </Container>
  </Navbar>
);
