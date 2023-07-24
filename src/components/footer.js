
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import { BsLinkedin,BsGithub } from 'react-icons/bs';

const Footer=()=>{
    return(
        <>
            <Row style={{ width:"100%",backgroundColor:"black",color:"white"}} className='d-flex flex-column align-items-center '>
                <Row style={{ width:"100%"}}  className='d-flex '>
                    <Col md={4} style={{height:"200px"}} className='d-flex flex-column justify-content-center text-center '>
                        <br></br>
                        <h1>Ibrahim</h1>
                        <p >I am an entry-level, computer engineer new graduate, experienced in fullstack development FE-heavy</p><br></br>
                       <p><Link className='footer-a' style={{width:"75%", color:"white"}} to="mailto:ibrahim.mneimneh3@gmail.com">ibrahim.mneimneh3@gmail.com</Link></p> 
                    </Col>
                    <Col md={8} className='d-flex justify-content-center align-items-center'>
                        <Row style={{ width:"60%"}} className='text-center'> 
                            <Col md={4}>
                            <Link className='footer-a' to="/"><span className='footerlinks'>Home</span></Link>
                            </Col>
                            <Col md={4} >
                            <Link className='footer-a' to="/aboutibrahim"><span className='footerlinks'>About me</span></Link>
                            </Col>
                            <Col md={4}>
                            <Link  className='footer-a' to="/contact"><span className='footerlinks'>Contact</span></Link>
                            </Col>
                         
                        </Row>
                    </Col>
                </Row>
                <Row style={{height:"140px"}}  >
                  <Col className='d-flex  justify-content-center align-items-center'> 
                  <Row style={{ width:"80%"}} className='text-center'> 
                             
                             <div style={{ height:"55px",width:"50%"}} >
                                <Link to="https://www.linkedin.com/in/ibrahim-mnaimne-160ab4254/"><BsLinkedin className='socials'  /></Link>
                             </div>
                            <div style={{ height:"55px",width:"50%"}}>
                                <Link  to="https://github.com/ibrahimmn"><BsGithub className='socials' /></Link>
                             </div>                          
                        </Row>
                   
                </Col>
                </Row>
                <Row className='text-center'>
                    <small>Website created by <Link className='footer-a' to="https://www.linkedin.com/in/ibrahim-mnaimne-160ab4254/"><span style={{fontFamily:"bold",fontSize:"20px",color:"white"}}> Ibrahim Mnaimne</span></Link></small>
                </Row>
            </Row>
        </>
    );
};

export default Footer;