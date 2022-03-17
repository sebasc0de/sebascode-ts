import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ReactJS } from './pages/ReactJS';
import App from './pages/App';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import i18next from 'i18next';
import ReactDOM from 'react-dom';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/react" element={<ReactJS />} />
      </Routes>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
