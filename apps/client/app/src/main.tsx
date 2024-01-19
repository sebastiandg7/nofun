import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './i18n/i18n';
import App from './app/app';
import ReactGA from 'react-ga4';

ReactGA.initialize([
  {
    trackingId: 'G-VVCQWLGPGD',
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
