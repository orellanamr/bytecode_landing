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
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('es')}>Español</Button>
    </div>
  );
}

export default LanguageSwitcher;
