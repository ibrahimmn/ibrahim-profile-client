import React, { useState } from "react";
import { Container , Form , Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { Link } from "react-router-dom";
import GoToTop from "../components/gototop";
import Spinner from 'react-bootstrap/Spinner';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    setloading(true)
    e.preventDefault();

    axios
      .post('https://nodejs-test-d2uo.onrender.com/send-email', { name, email, message })
      .then((response) => {
        setStatus('Email sent, I\'ll get back to you. ');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setStatus('Error: Unable to send the email.');
        console.error(error);
      });

      setloading(false)
  };
 

  return (
    <>
    <Container fluid>
        <Row   className=' padding0'>
            <Col md={12} style={{width:"100%",height:"400px",color:"white"}} className='d-flex flex-column justify-content-center align-items-center text-center   bg-black' >
                <div>
                <h1><strong>Contact Ibrahim Mnaimne</strong></h1>
                </div>
                <div className="scroll-down"></div>
            </Col>
        </Row>
     </Container> <br></br> <br></br> 

     <Container fluid>
      <Row className="d-flex ">
        <Col md={4} className="d-flex flex-column justify-content-center text-center">
          <h3><strong>Location:</strong> </h3><h3>Istanbul, Turkey</h3><br></br>
          <h3><strong>Email:</strong></h3><h3><Link to="mailto:Ibrahim.mneimneh3@gmail.com"> Ibrahim.mneimneh3@gmail.com</Link></h3><br></br><br></br>
        
        </Col>

        <Col md={8}  className="d-flex flex-column align-items-center justify-content-center">

          
          <Form style={{width:"50%"}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><strong>Full Name</strong></Form.Label>
              <Form.Control 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><strong>Email address</strong></Form.Label>
              <Form.Control 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label><strong>Your message to Ibrahim</strong></Form.Label>
              <Form.Control 
                as="textarea" rows={3}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>


            
            {
              loading ?

              <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>

                  :

                  
            <Button variant="dark" type="submit">
              Send Message
            </Button>
             }


          </Form><br></br> 
          <p>{status}</p>
        
        </Col>

      </Row>

     </Container> <br></br> <br></br> 

 
     <GoToTop />
        </>
  );
};

export default Contact;

