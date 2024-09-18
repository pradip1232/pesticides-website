import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './ContactForm.css'; // Add your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactFormSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="contact-form-section">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <h2 data-aos="fade-up" className="text-center text-white">GET IN TOUCH WITH US !</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form data-aos="fade-up" style={{ padding: '10px' }}>
                            {/* Form Name */}
                            <Form.Group className="mb-3" controlId="formName">
                                <Row className="align-items-center">
                                    <Col md={2} className="d-flex justify-content-end align-items-center">
                                        <Form.Label className="txt-content">Name</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light transparent background
                                                
                                                },
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Email Address */}
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Row className="align-items-center">
                                    <Col md={2} className="d-flex justify-content-end align-items-center">
                                        <Form.Label className="txt-content">Email Address</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light transparent background
                                                
                                                },
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Contact Number */}
                            <Form.Group className="mb-3" controlId="formContact">
                                <Row className="align-items-center">
                                    <Col md={2} className="d-flex justify-content-end align-items-center">
                                        <Form.Label className="txt-content">Contact Number</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light transparent background
                                                
                                                },
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Product Interested In */}
                            <Form.Group className="mb-3" controlId="formProduct">
                                <Row className="align-items-center">
                                    <Col md={2} className="d-flex justify-content-end align-items-center">
                                        <Form.Label className="txt-content">Product Interested In</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <Form.Control as="select" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>
                                            <option>Select a product</option>
                                            <option>Product 1</option>
                                            <option>Product 2</option>
                                            <option>Product 3</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Query Details */}
                            <Form.Group className="mb-3" controlId="formQuery">
                                <Row className="align-items-center">
                                    <Col md={2} className="d-flex justify-content-end align-items-center">
                                        <Form.Label className="txt-content">Query Details</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant="filled"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light transparent background
                                                
                                                },
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="success"
                                className="mx-auto d-block"
                                style={{ backgroundColor: '#66BB6A', border: 'none' }}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>



            </Container>
        </div>
    );
};

export default ContactFormSection;
