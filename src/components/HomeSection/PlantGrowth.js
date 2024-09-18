import React, { useEffect, useRef, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './Plant.css';

// Image imports
import FirstImage from '../../img/Plant/rick-van-der-haar-V0J9vNWPOs8-unsplash-1 2.png';
import SecImage from '../../img/Plant/04June22_what-are-the-requirements-for-plant-growth_iStock-956366756 1.png';
import ThreeImage from '../../img/Plant/360_F_796377964_GkyvfWTOoV1EQyN2UkdsJ8omvSja6AZl 2.png';
import FourImage from '../../img/Plant/Untitled-design-2023-08-19T162005.734 1.png';
import FiveImage from '../../img/Plant/how-do-seeds-sprout-1701627640 2.png';
import SixImage from '../../img/Plant/large_1_FAO_PO_ETH_20200514_0018_920 1.png';

const PlantGrowth = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const categories = [
        { img: FirstImage, text: 'In an industry where soil degradation is a prevalent concern, our soil regeneration solution stands out. While conventional methods yield limited results, our approach boasts an impressive success rate of revitalizing soil health by up to 80%.', heading: 'Soil Regeneration' },
        { img: SecImage, text: 'While the industry average for seed germination stands at 60%, we pride ourselves on surpassing expectations by offering an impressive 90% success rate.', heading: 'Seed Germination' },
        { img: ThreeImage, text: 'Our innovation goes further. We offer an advanced solution with additional tertiary and Quadrapel roots, ensuring unparalleled plant vitality and growth.', heading: 'Root Development' },
        { img: FourImage, text: 'Experience superior plant development with our solution, promoting better greenery and abundant branches.Elevate your garden or farm to new levels of vibrancy and beauty.', heading: 'Plant Growth' },
        { img: FiveImage, text: 'Our solution ensures increased blooming, significantly reduces flower dropping (below the industry standard of 40%), and maximizes fruit setting.', heading: 'Flowering' },
        { img: SixImage, text: 'Our integrated pest management system is a comprehensive solution that tackles pests effectively, ensuring a healthy and thriving environment for your crops.', heading: 'Pest Management' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the section is visible
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
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
        <Container className="mt-4" ref={sectionRef}>
            <h2 className={`text-center mb-4 ${isVisible ? 'animate__fadeInDown' : ''}`} style={{ color: '#6BA92C', visibility: isVisible ? 'visible' : 'hidden' }}>
                PLANT GROWTH PROCESS
            </h2>
            <Grid container spacing={2} justifyContent="center">
                {categories.map((category, idx) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={idx}
                        className={`animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}
                        style={{ animationDelay: `${idx * 0.2}s`, visibility: isVisible ? 'visible' : 'hidden' }}
                    >
                        <div className="card-container">
                            <Card className="mb-4 text-center" style={{ border: 'none', borderRadius: '17px' }}>
                                <Card.Img
                                    variant="top"
                                    src={category.img}
                                    style={{ height: '264px', objectFit: 'cover', borderRadius: '17px' }}
                                    alt={category.text}
                                />
                                <div className="hover-overlay">
                                    <h3 style={{ padding: '10px', textAlign: 'left', fontSize: isMobile ? '14px' : '24px', color: 'white', borderRadius: '17px' }}>
                                        {category.heading}
                                    </h3>
                                    <p style={{ padding: '10px', textAlign: 'left', fontSize: isMobile ? '12px' : '16px', color: 'white', borderRadius: '17px' }}>
                                        {category.text}
                                    </p>
                                </div>

                            </Card>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PlantGrowth;
