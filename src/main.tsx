import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import './app/styles/styles.scss';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './app/i18n/i18n';
import { store } from './app/store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
        {/* </Provider> */}
    </React.StrictMode>,
);
