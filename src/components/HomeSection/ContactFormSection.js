import React, { useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactForm.css';
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
                        <h2 data-aos="fade-up" className="text-center text-white">
                            GET IN TOUCH WITH US!
                        </h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form data-aos="fade-up" className="p-3">
                            {/* Name Field */}
                            <Form.Group className="mb-3" controlId="formName">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-md-right">
                                        <Form.Label className="txt-content">Name</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            placeholder="Enter your name"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                },
                                            }}
                                            aria-label="Name"
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-md-right">
                                        <Form.Label className="txt-content">Email Address</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            placeholder="Enter your email"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                },
                                            }}
                                            aria-label="Email Address"
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Contact Number Field */}
                            <Form.Group className="mb-3" controlId="formContact">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-md-right">
                                        <Form.Label className="txt-content">Contact Number</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            placeholder="Enter your contact number"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                },
                                            }}
                                            aria-label="Contact Number"
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Product Interested In Field */}
                            <Form.Group className="mb-3" controlId="formProduct">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-md-right">
                                        <Form.Label className="txt-content">Product Interested In</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <Form.Control
                                            as="select"
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                padding: '10px',
                                            }}
                                            aria-label="Product Interested In"
                                        >
                                            <option>Select a product</option>
                                            <option>Product 1</option>
                                            <option>Product 2</option>
                                            <option>Product 3</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Query Details Field */}
                            <Form.Group className="mb-3" controlId="formQuery">
                                <Row className="align-items-center">
                                    <Col md={2} className="text-md-right">
                                        <Form.Label className="txt-content">Query Details</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant="filled"
                                            placeholder="Enter your query details"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                },
                                            }}
                                            aria-label="Query Details"
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>

                            {/* Submit Button */}
                            <Row>
                                <Col className="text-center">
                                    <Button
                                        type="submit"
                                        variant="success"
                                        className="mt-3"
                                        style={{
                                            backgroundColor: '#8bcc00',
                                            border: 'none',
                                            padding: '10px 20px',
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactFormSection;
