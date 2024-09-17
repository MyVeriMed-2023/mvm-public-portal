import { createI18n } from 'vue-i18n';

// Import your language files
import en from '@/assets/i18n/en.json';
import fr from '@/assets/i18n/fr.json';
import de from '@/assets/i18n/de.json';

// Set up i18n instance with your languages
const messages = {
  en,
  fr,
  de
};

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en', // fallback language in case the translation is missing
  messages, // set locale messages
});

export default i18n;
