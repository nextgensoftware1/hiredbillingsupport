import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import all required CSS files
import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/odometer.min.css';
import './assets/css/style.css';
import './assets/css/swiper-bundle.min.css';
// Import some JS utilities used by the template (bootstrap etc.) so data-bs attributes work
// Use the official bootstrap bundle from node_modules (includes Popper) so ESLint doesn't lint minified vendor file
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import reportWebVitals from './reportWebVitals';
// Image initialization: upgrade native lazy attrs and register global lazy images
import './utils/imageInit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
