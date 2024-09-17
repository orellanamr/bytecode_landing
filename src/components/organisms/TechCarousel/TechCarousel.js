import React from 'react';
import { Box } from '@mui/material';
import ReactLogo from '../../../assets/images/react_logo.svg';
import ReduxLogo from '../../../assets/images/redux_logo.svg';
import AngularLogo from '../../../assets/images/angular_logo.svg';

function TechCarousel() {
  const carouselLogos = [
    { img: ReactLogo, title: 'React Logo' },
    { img: AngularLogo, title: 'Angular Logo' },
    { img: ReduxLogo, title: 'Redux Logo' },
  ];
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
          animation: 'scroll 40s linear infinite',
          '& img': {
            width: '250px',
            margin: '0 40px',
          },
        }}
      >
        {carouselLogos.map(item => (
          <div>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
        {carouselLogos.map(item => (
          <div>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </Box>

      <style>
        {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-10%); }
            }
          `}
      </style>
    </Box>
  );
}

export default TechCarousel;
