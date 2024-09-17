import React from 'react';
import { Box } from '@mui/material';
import ReactLogo from '../../../assets/images/react_logo.svg';
import ReduxLogo from '../../../assets/images/redux_logo.svg';
import JavaScriptLogo from '../../../assets/images/javascript_logo.svg';
import NodejsLogo from '../../../assets/images/nodejs_logo.svg';
import DockerLogo from '../../../assets/images/docker_logo.svg';
import AWSLogo from '../../../assets/images/aws_logo.svg';
import AzureLogo from '../../../assets/images/azure_logo.svg';

function TechCarousel() {
  const carouselLogos = [
    { img: ReactLogo, title: 'React Logo' },
    { img: ReduxLogo, title: 'Redux Logo' },
    { img: JavaScriptLogo, title: 'JavaScript Logo' },
    { img: NodejsLogo, title: 'Nodejs Logo' },
    { img: DockerLogo, title: 'Docker Logo' },
    { img: AWSLogo, title: 'AWS Logo' },
    { img: AzureLogo, title: 'Azure Logo' },
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
          animation: 'scroll 60s linear infinite',
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
      </Box>

      <style>
        {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              50% { transform: translateX(-20%); }
            }
          `}
      </style>
    </Box>
  );
}

export default TechCarousel;
