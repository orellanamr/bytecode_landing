import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkedIn, Email, Instagram, Facebook } from '@mui/icons-material';
import LogoByteCodeWhite from '../../../assets/images/byteCode_Logo_white.svg';
import MyIcon from '../../../assets/images/icon_arrow-up-right.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ width: '100%', backgroundColor: '#010101', padding: '100px 100px' }}
    >
      <Box
        sx={{
          minHeight: '50vh', // Esto garantiza que ocupe la mitad de la pantalla
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DDF247',
          padding: '30px',
          borderRadius: '30px',
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: '1200px' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" fontFamily="Aeonik">
              {t('footer.footer_title')}
            </Typography>
            <Typography variant="h5" marginTop="20px" fontFamily="Aeonik">
              {t('footer.footer_description')}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label={t('footer.name')}
                  fontFamily="Aeonik"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label={t('footer.email')}
                  fontFamily="Aeonik"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t('footer.message')}
                  multiline
                  rows={4}
                  fontFamily="Aeonik"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  href="#cta"
                  sx={{
                    backgroundColor: '#010101',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {t('footer.button')}
                  <img
                    src={MyIcon}
                    alt="Ícono de enviar mensaje"
                    style={{ marginLeft: '10px' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: '75px 0',
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={LogoByteCodeWhite} alt="byteCode Logo" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'right',
              }}
            >
              <LinkedIn sx={{ color: 'white', marginRight: '15px' }} />
              <Email sx={{ color: 'white', marginRight: '15px' }} />
              <Instagram sx={{ color: 'white', marginRight: '15px' }} />
              <Facebook sx={{ color: 'white' }} />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginTop: '20px',
            borderTop: '1px solid white',
            paddingTop: '10px',
          }}
        >
          <Typography
            variant="h6"
            fontFamily="Aeonik"
            display="flex"
            justifyContent="flex-end"
          >
            © 2024 Copyright. |{' '}
            <a href="https://bytecode.com" style={{ color: '#DDF247' }}>
              bytecode.com
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
