import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button
        onClick={() => changeLanguage('en')}
        style={{
          color: '#505050', // Color del texto
          backgroundColor: '#FFFFFF', // Color del botón
        }}
      >
        English
      </Button>
      <Button
        onClick={() => changeLanguage('es')}
        style={{
          color: '#505050',
          backgroundColor: '#FFFFFF',
        }}
      >
        Español
      </Button>
    </div>
  );
}

export default LanguageSwitcher;
