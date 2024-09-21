import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '@mui/material/styles';

const WhatsAppButton = () => {
    // Handle button click to open WhatsApp
    const handleWhatsAppClick = () => {
        const phoneNumber = '+91966779885520'; // Replace with your phone number
        const message = 'Hello, I would like to know more about your products.'; // Customize the default message

        // Open WhatsApp link in a new tab
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div style={styles.container}>
            <IconButton
                onClick={handleWhatsAppClick}
                style={styles.button}
            >
                <WhatsAppIcon style={styles.icon} />
            </IconButton>
        </div>
    );
};

// Define the styles for the container and button
const styles = {
    container: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000, // Ensure the button is on top
    },
    button: {
        // backgroundColor: '#25D366', // WhatsApp green color
        borderRadius: '50%', // Circular shape
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: 'green',
    },
    icon: {
        fontSize: '70px',
    },
};

export default WhatsAppButton;
