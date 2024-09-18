import React, { useEffect, useRef, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton'; // Import Skeleton from MUI
import { useMediaQuery } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import FirstImage from '../../img/product-cate/free-img 1.png'; // Correct import
import SecImage from '../../img/product-cate/granular-fertilizer 1.png'; // Correct import
import ThreeImage from '../../img/product-cate/granular-fertilizer-1200x800_600x600 1.png'; // Correct import
import FourImage from '../../img/product-cate/ob_bc7b0c_liquid-fertilizer 1.png'; // Correct import
import Four5Image from '../../img/product-cate/1701464591718 1.png'; // Correct import
import Four6Image from '../../img/product-cate/NCFB_MarkStebnicki_LettuceField_feat 1.png'; // Correct import
import Four7Image from '../../img/product-cate/biocontrol 1.png'; // Correct import
import Four8Image from '../../img/product-cate/Soil_Conditioner_vs_Compost-min 1.png'; // Correct import

const ProductCategory = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const categories = [
        { title: 'Liquid Organic Fertilizer', img: FirstImage, animation: 'animate__fadeInUp' },
        { title: 'Bio Fertilizer', img: SecImage, animation: 'animate__fadeInUp' },
        { title: 'Granules Fertilizer', img: ThreeImage, animation: 'animate__fadeInUp' },
        { title: 'NPK Fertilizer', img: FourImage, animation: 'animate__fadeInUp' },
        { title: 'Bio Pest Management', img: Four8Image, animation: 'animate__fadeInUp' },
        { title: 'Soil Conditioner', img: Four7Image, animation: 'animate__fadeInUp' },
        { title: 'Bio Kit', img: Four6Image, animation: 'animate__fadeInUp' },
        { title: 'Others', img: Four5Image, animation: 'animate__fadeInUp' },
    ];

    useEffect(() => {
        // Simulate a data fetch delay
        setTimeout(() => {
            setIsLoading(false); // Data has been "loaded"
        }, 2000); // 2 second delay for demo
    }, []);

    return (
        <Container className="mt-4">
            <h2
                className="text-center mt-5 mb-4 product-category-heading"
                style={{
                    fontFamily: 'Arial',
                    fontSize: '36px',
                    fontWeight: '400',
                    lineHeight: '41.31px',
                    letterSpacing: '0.06em',
                    color: 'rgba(139, 204, 0, 1)',
                }}
            >
                PRODUCT CATEGORY
            </h2>

            <Grid container spacing={2} justifyContent="center">
                {categories.map((category, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx} className={`animate__animated ${!isLoading ? category.animation : ''}`} style={{ animationDelay: `${idx * 0.2}s` }}>
                        <Card className="mb-4 text-center" style={{ border: 'none' }}>
                            {isLoading ? (
                                <Skeleton variant="rectangular" width="100%" height={264} />
                            ) : (
                                <Card.Img variant="top" src={category.img} style={{ height: '264px', objectFit: 'cover' }} alt={category.title} />
                            )}
                            <Card.Body>
                                {isLoading ? (
                                    <Skeleton width="60%" />
                                ) : (
                                    <Card.Title
                                        style={{
                                            fontFamily: 'Arial',
                                            fontSize: isMobile ? '14px' : '18px',
                                            fontWeight: '400',
                                            lineHeight: '27.6px',
                                            letterSpacing: '0.06em',
                                            color: 'rgba(213, 135, 17, 1)'
                                        }}
                                    >
                                        {category.title}
                                    </Card.Title>

                                )}
                            </Card.Body>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductCategory;
