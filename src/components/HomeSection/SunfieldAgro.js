import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Event, Public, Agriculture } from '@mui/icons-material';
import CountUp from 'react-countup';
import FF from '../../img/ss/icon ss 4.png';
import F2 from '../../img/ss/icon ss 5.png';
import F3 from '../../img/ss/icon ss 6.png';
import './Sun.css';
const SunfieldAgro = () => {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div>
            {/* Main Section with Background Image */}
            <div
                ref={sectionRef}
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'black',
                    padding: '50px 0',
                }}
            >
                <Container>
                    <h2 className="text-center mb-4" style={{ color: '#83b745' }}>SUNFIELD AGRO</h2>
                </Container>
                <div style={{ backgroundColor: 'rgba(139, 204, 0, 0.19)', padding: '20px 0' }}>


                    <Container>
                        <Row className="text-center text-black sunfields-heading ">
                            <Col md={4} className='d-flex justify-content-center  align-items-center'>
                                <div className='mr-2'>
                                    <img src={FF} className='' />
                                    {/* <Event style={{ fontSize: 50, color: 'black' }} /> */}
                                </div>
                                <div className='heading-3'>

                                    <h4>Started In</h4>
                                    <CountUp start={0} end={startCount ? 2017 : 0} duration={2} />
                                </div>
                            </Col>
                            <Col md={4} className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <img src={F2} />
                                    {/* <Public style={{ fontSize: 50, color: 'black' }} /> */}
                                </div>

                                <div className='heading-3'>

                                    <h4>Presence in</h4>
                                    <CountUp start={0} end={startCount ? 7 : 0} duration={2} />
                                    <span> States</span>
                                </div>
                            </Col>
                            <Col md={4} className='d-flex justify-content-center align-items-center'>

                                <div>
                                    <img src={F3} />
                                    {/* <Agriculture style={{ fontSize: 50, color: 'black' }} /> */}
                                </div>
                                <div className='heading-3'>

                                    <h4>Improved</h4>
                                    <CountUp start={0} end={startCount ? 70 : 0} duration={2} />
                                    <span>+ Crops</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* About Section with Another Background */}
            <div
                className='aboutus-section'
            >
                <Container>
                    <h2 className="mb-4" style={{ color: 'rgba(139, 204, 0, 1)' }}>ABOUT US</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'black' }}>
                        Sunfield Agro India Pvt Ltd is an ISO 9001-2015 certified company launched by two
                        aspirational social entrepreneurs Mr. Uttam Kotwani and Mr. Manish Agarwal. We are
                        engaged in manufacturing, importing, exporting, and supplying a wide range of Organic
                        Fertilizers and Bio-Pesticides. These environmentally friendly agro products are highly
                        appreciated for their accurate composition and strong disinfectant properties.
                    </p>
                    <Button variant="success" className="mt-4 readmorebtn">Read More</Button>
                </Container>
            </div>
        </div>
    );
};

export default SunfieldAgro;
