import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container>
    <div style={{height:"700px"}} className='d-flex flex-column align-items-center justify-content-center'>
      <h2>Error 404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
    </Container>
  );
};

export default NotFound;