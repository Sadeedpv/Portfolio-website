import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// App.jsx
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.75/dist/');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);