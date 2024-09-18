import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Facebook, Twitter, YouTube, WhatsApp, Instagram, Google } from '@mui/icons-material';
import './Footer.css'; // Custom styling
import Logo from './../img/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer-section">
      <Container fluid className="p-5 pl-5 ml-5 mr-5">
        <Row>
          {/* Column 1: Logo and Address Details */}
          <Col md={6} data-aos="fade-up p-2">
            <div className="footer-logo">
              <img src={Logo} alt="Logo" className="mb-3" />
              {/* <h4>Sunfield Agro India Pvt. Ltd.</h4> */}
              <p className="footer-mission">Our Mission: <br /> <span>BETTER TOMORROW</span></p>
              <p>
                <LocationOnIcon /> 302/A, Shree Saryu Soc, Parbhat Ind. Complex,
                W.E. Highway, Near Toll Naka, Dahlar(east), Mumbai-400068. MH, India.
              </p>
              <p>
                <PhoneIcon /> +91-9167141616
              </p>
              <p>
                <EmailIcon /> sunfieldagro@gmail.com
              </p>
            </div>
          </Col>

          {/* Column 2: Policy Links */}
          <Col md={3} data-aos="fade-up" className="text-left mr-4">
            <h5>Our Policy</h5>
            <ul className="list-unstyled">
              <li>Return Policy</li>
              <li>Product Guarantees</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms of Service</li>
              <li>Shipping Policy</li>
            </ul>
          </Col>

          {/* Column 3: Quick Links and Social Icons */}
          <Col md={3} data-aos="fade-up" className="text-left ">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Products</li>
              <li>Product Videos</li>
              <li>Feel the Difference</li>
            </ul>

            <div className="social-icons">
              <Facebook style={{ color: '#3b5998', fontSize: '2rem', margin: '0 10px' }} />
              <Twitter style={{ color: '#1DA1F2', fontSize: '2rem', margin: '0 10px' }} />
              <YouTube style={{ color: '#FF0000', fontSize: '2rem', margin: '0 10px' }} />
              <WhatsApp style={{ color: '#25D366', fontSize: '2rem', margin: '0 10px' }} />
              <Instagram style={{ color: '#E1306C', fontSize: '2rem', margin: '0 10px' }} />
            </div>
          </Col>
        </Row>
        <p className='text-center'>         Lorem Ipsum is simply dummy text of the printing and typesetting industry.        </p>
      </Container>
    </footer>
  );
};

export default Footer;
