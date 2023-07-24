import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import {FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaBootstrap,FaLaravel,FaPhp } from 'react-icons/fa';
import {BiLogoJavascript,BiLogoMongodb,BiLogoTailwindCss,BiLogoFirebase} from'react-icons/bi';
import{GrMysql} from 'react-icons/gr';
import {TbApi} from'react-icons/tb';
import {SiAuth0} from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import GoToTop from '../components/gototop';
 

 

const Aboutme = () => {

  
   useEffect(()=>{
       
        const observer= new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
              if(entry.isIntersecting){
                  entry.target.classList.add('show');
              } 
          });
        });
        const cardobserver= new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
              if(entry.isIntersecting){
                  entry.target.classList.add('cardshow');
              } 
          });
        });
    
    
        const hiddenElements=document.querySelectorAll(' .hidden');
        const cardhiddenElements=document.querySelectorAll(' .cardhidden');
    
        hiddenElements.forEach((el)=>observer.observe(el));
        cardhiddenElements.forEach((ell)=>cardobserver.observe(ell));
    
    },[]);

  return(
    <> 
    <Container fluid>
        <Row   className=' padding0'>
            <Col md={12} style={{width:"100%",height:"400px",color:"white"}} className='d-flex flex-column justify-content-center align-items-center text-center   bg-black' >
                <div>
                <h1><strong>About Ibrahim Mnaimne</strong></h1>
                </div>
                <div className="scroll-down"></div>
            </Col>
        </Row>
        
    </Container><br></br><br></br>
    <Container className='d-flex flex-column  padding0 ' fluid> 
        <Row  className='d-flex  flex-column  justify-content-center align-items-center .hidden' >
            <Col md={6}>
                <h1><strong>Summary</strong></h1><br></br>
            </Col>
            <Col className='text-center' md={6}>
                <h3 style={{ padding:"10px"}}   >An enthusiastic lebanese, computer engineer new graduate, with almost 1 year of work
                      experience, I specialize in front-end and back-end development. Ready to set sail.
                </h3>
            </Col>
        </Row>
    </Container><br></br><br></br>
    <Container className='d-flex flex-column padding0  ' fluid><br></br>
        <Row   className='d-flex  flex-column  align-items-center hidden' >
            <Col md={6}>
                <h1><strong>Education</strong></h1><br></br>
            </Col>
            <Col md={6}>
             <ListGroup  style={{ padding:"10px"}} variant='flush'>
                <ListGroupItem  ><h2>Istanbul aydin university</h2></ListGroupItem>
                <ListGroupItem><h4><em>Bachelor's degree, Computer Engineering </em></h4></ListGroupItem>
                <ListGroupItem><h4>Graduated in June 2023</h4></ListGroupItem>
                <ListGroupItem><h4>3.23/4 GPA</h4></ListGroupItem>   
             </ListGroup>
            </Col>
        </Row>
    </Container><br></br>
    
    <br></br> 
    <Container className='d-flex flex-column padding0  ' fluid> 
        <Row   className='d-flex  flex-column  align-items-center hidden' >
            <Col md={6}>
                <h1><strong>Work experience</strong></h1> 
            </Col>
            <Col md={6}>
              
            </Col>
        </Row>
    </Container> 
    
    <Container className="d-flex flex-column align-items-center justify-content-center  hidden" fluid><br></br>
         

           
            <Row style={{margin:"0" }} xs={1} md={3} className="d-flex align-items-center justify-content-center cardwidth g-5 hidden" >

            <Col  >
          <Card  style={{height:"155px"}} >           
            <Card.Body>
              <Card.Title><b>Hubinit</b></Card.Title>
              <Card.Text>
              <em>UX/UI and Front end developer Intern</em>	
              </Card.Text>
              <Card.Text>
              Nov 2022- Feb 2023	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col >
          <Card  style={{height:"155px"}}  >           
            <Card.Body>
              <Card.Title><b>HediyeSepeti</b></Card.Title>
              <Card.Text>
              <em>PHP backend developer</em>
              </Card.Text>
              <Card.Text>
              Dec 2020- Feb 2021	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col  >
          <Card  style={{height:"155px"}} >           
            <Card.Body>
              <Card.Title><b>Appen</b></Card.Title>
              <Card.Text>
              <em>Data collector</em>
              </Card.Text>
              <Card.Text>
              Apr 2023- Present	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
                  
         </Row><br></br>
  
    </Container><br></br>
     
   <br></br><br></br>
    <Container className='d-flex flex-column padding0  ' fluid><br></br>
        <Row   className='d-flex  flex-column  align-items-center hidden' >
            <Col md={6}>
                <h1><strong>Skills</strong></h1><br></br>
            </Col>
            <Col md={6}>
              
            </Col>
        </Row>
    </Container><br></br>
    <Container className="d-flex flex-column align-items-center justify-content-center  " fluid><br></br>
         

            <h3 ><b>Frontend</b></h3><br></br>
            <Row style={{margin:"0" }} xs={2} md={4} className="d-flex align-items-center justify-content-center cardwidth g-5 " >

              <Col  >
                <Card   className='cardhidden '>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <FaHtml5 className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>HTML5</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col  >
                <Card   className='cardhidden one '>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <FaCss3Alt className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>CSS3</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col  >
                <Card  className='cardhidden two '>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <BiLogoJavascript className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>JavaScript</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col  >
                <Card   className='cardhidden three '>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <FaReact className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>React</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col >
                <Card  className='cardhidden four '>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <FaBootstrap className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>Bootstrap</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col   >
                <Card   className='cardhidden five '>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <BiLogoTailwindCss className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>Tailwind</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>
                  
         </Row><br></br>
  
    </Container><br></br>
    <br></br>
    <Container className="d-flex flex-column align-items-center justify-content-center  " fluid><br></br>
         

            <h3 ><b>Backend</b></h3><br></br>
            <Row style={{margin:"0" }} xs={2} md={4} className="d-flex align-items-center justify-content-center cardwidth g-5 " >

            <Col className='cardhidden'>
                <Card>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <FaNodeJs className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>NodeJs</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col className='cardhidden one'>
                <Card>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <FaLaravel className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>Laravel</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col className='cardhidden two'>
                <Card>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <FaPhp className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>Php</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col className='cardhidden three'>
                <Card>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <TbApi className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>REST APIs</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>
                  
         </Row><br></br>
  
    </Container><br></br>
    <br></br>
    <Container className="d-flex flex-column align-items-center justify-content-center  " fluid><br></br>
         

            <h3 ><b>Database</b></h3><br></br>
            <Row style={{margin:"0" }} xs={2} md={2} className="d-flex align-items-center justify-content-center cardwidth g-5 " >

            <Col className='cardhidden'>
                <Card>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <BiLogoMongodb className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>Mongodb</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>

                <Col className='cardhidden one'>
                <Card>           
                  <Card.Body className='text-center'>
                    <Card.Title variant='top'>
                      <GrMysql className='app-logo' />
                    </Card.Title>
                    <Card.Title><b>Mysql</b></Card.Title>                    
                  </Card.Body>
                </Card>
                </Col>
                  
         </Row><br></br>
  
    </Container><br></br>
    <br></br>
    <Container className="d-flex flex-column align-items-center justify-content-center  " fluid><br></br>
         

            <h3 ><b>Authentication</b></h3><br></br>
            <Row style={{margin:"0" }} xs={2} md={2} className="d-flex align-items-center justify-content-center cardwidth g-5 " >

            <Col className='cardhidden'>
                  <Card>           
                    <Card.Body className='text-center'>
                      <Card.Title variant='top'>
                        <SiAuth0 className='app-logo' />
                      </Card.Title>
                      <Card.Title><b>Auth0</b></Card.Title>                    
                    </Card.Body>
                  </Card>
                  </Col>

                  <Col className='cardhidden one'>
                  <Card>           
                    <Card.Body className='text-center'>
                      <Card.Title variant='top'>
                        <BiLogoFirebase className='app-logo' />
                      </Card.Title>
                      <Card.Title><b>Firebase</b></Card.Title>                    
                    </Card.Body>
                  </Card>
                  </Col>
                  
         </Row><br></br>
  
    </Container><br></br>



    <Container fluid>
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

export default Aboutme;