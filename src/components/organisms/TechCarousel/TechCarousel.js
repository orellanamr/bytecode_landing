import React from 'react';
import { Box } from '@mui/material';
import ReactLogo from '../../../assets/images/react_logo.svg';
import ReduxLogo from '../../../assets/images/redux_logo.svg';
import AngularLogo from '../../../assets/images/angular_logo.svg';

function TechCarousel() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: '75px 0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 60s linear infinite',
          '& img': {
            width: '250px',
            margin: '0 40px',
          },
        }}
      >
        <img src={ReactLogo} alt="React" />
        <img src={ReduxLogo} alt="Redux" />
        <img src={AngularLogo} alt="Angular" />
        <img src={ReactLogo} alt="React" />
        <img src={ReduxLogo} alt="Redux" />
        <img src={AngularLogo} alt="Angular" />
        <img src={ReactLogo} alt="React" />
        <img src={ReduxLogo} alt="Redux" />
        <img src={AngularLogo} alt="Angular" />
      </Box>

      <style>
        {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
      </style>
    </Box>
  );
}

export default TechCarousel;
