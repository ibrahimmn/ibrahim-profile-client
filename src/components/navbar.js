import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navibar() {
  return (
    <>
      
      <Navbar collapseOnSelect expand="lg" className="bg-light.bg-gradient" >
      <Container fluid >
        <Navbar.Brand href="/">Ibrahim Mnaimne</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav fill variant="underline" >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/aboutibrahim">About me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact" >Contact</Nav.Link>
      </Nav.Item>
    </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </>
  );
}

export default Navibar;