import React, { useState } from 'react';
import { Box, Button, Typography, Container, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import './ImageComparisonSlider.css'; // Ensure this path is correct
import Before from '../../img/before.png'; // Ensure these paths are correct
import After from '../../img/after.png';

const ImageComparisonSlider = () => {
    const [scrollPosition, setScrollPosition] = useState(150); // Initial scroll position
    const [maxScroll, setMaxScroll] = useState(500); // Set this based on your image size

    const handleArrowClick = (direction) => {
        setScrollPosition(prevPosition => {
            const newPosition = direction === 'right'
                ? Math.min(prevPosition + 50, maxScroll)
                : Math.max(prevPosition - 50, 0);
            return newPosition;
        });
    };

    return (
        <Container>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
                <IconButton onClick={() => handleArrowClick('left')}>
                    <ArrowLeft />
                </IconButton>
                <Typography variant="h2" gutterBottom>Discover the Difference</Typography>
                <IconButton onClick={() => handleArrowClick('right')}>
                    <ArrowRight />
                </IconButton>
            </Box>
            <Typography variant="body1" paragraph>
                Crop Comparison for Informed Farming Decisions
            </Typography>
            <Button variant="contained" color="primary">View More</Button>
            <Box className="image-comparison-slider">
                <Box className="wrapper-crop">
                    <Box className="before-crop" style={{ width: `${scrollPosition}px` }}>
                        <img className="content-image" src={Before} alt="Before" draggable="false" />
                        <Typography className="before_text">Before</Typography>
                    </Box>
                    <Box className="after-crop">
                        <img className="content-image" src={After} alt="After" draggable="false" />
                        <Typography className="after_text">After</Typography>
                    </Box>
                    <Box className="scroller">
                        <svg className="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                            <polygon points="0 50 37 68 37 32 0 50" style={{ fill: '#fff' }} />
                            <polygon points="100 50 64 32 64 68 100 50" style={{ fill: '#fff' }} />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default ImageComparisonSlider;
