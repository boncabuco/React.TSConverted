import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') ?? '';
const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement);

root.render(

    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>
);

serviceWorkerRegistration.unregister();
