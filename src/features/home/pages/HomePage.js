import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

function HomePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <LanguageSwitcher />
      <Typography variant="h2" gutterBottom>
        {t('welcome')}
      </Typography>
      <Button variant="contained" color="primary">
        {t('getStarted')}
      </Button>
    </Container>
  );
}

export default HomePage;
