import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import GoToTop from '../components/gototop';




const HomePage = () => {
 const navigate=useNavigate();
  useEffect(()=>{
       
      const observer= new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } 
        });
      });


      const hiddenElements=document.querySelectorAll(' .hidden');

      hiddenElements.forEach((el)=>observer.observe(el)); 

  },[])


return (
    <>
    <Container fluid >
      <Row >

        <Col md={4} className='padding-0'>
           <div class="hicontainer">
            <div class="hi">
                <h3>HI, I am</h3>
                <h1>Ibrahim Mnaimne</h1><br /><br /><br /><br />
                <h4>A Web Developer</h4>
            </div>
            </div> 
        </Col>
        <Col md={8} className=' padding-0'>
        <Image src="img/ibrahim.jpg"  fluid />
        
        </Col>

      </Row>
      <Row>
        <Col md={12} className='intro d-flex flex-column justify-content-center align-items-center text-center '>
          <div className='hidden'>
          <h1 style={{color:"white",paddingBottom:"20px"}}>
                This is my profile website
          </h1>
          <h3 style={{color:"white",paddingTop:"20px"}}>
            You can download my CV, check my professional background and contact me.
          </h3><br></br><br></br>
          <Row className=' d-flex justify-content-center align-items-center  '>
            <Col md={6}>
            <button className="button-81 " onClick={() => navigate("/aboutibrahim")}>
            About me 
            </button>
            </Col>
            <Col className='top' md={6}>
            <button className="button-81 " onClick={() => navigate("/contact")}>
            Contact me 
            </button>
            </Col>
          </Row>
           
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className='cv d-flex flex-column justify-content-center align-items-center '>
            <div className='cv-title'>
                <h1>My CV</h1>
            </div>
            <div className='hidden'>
                <button className="button-cv-pushable">
                <span className="button-cv-shadow"></span>
                <span className="button-cv-edge"></span>
               
               
                <Link to="/Ibrahim+Mnaimne+Resume.pdf" style={{ textDecoration: 'none' }} target="_blank" download>  <span className="button-cv-front text">Download Ibrahim's CV<FontAwesomeIcon icon={faFile} style={{color: "#ffffff",paddingLeft:"15px"}} /> </span></Link>
               
                </button>
            </div>
        </Col>
      </Row>
    </Container>

    <GoToTop />
    </>
)};

export default HomePage;