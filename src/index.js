import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './utils/Redux/store';
// import store from './utils/Redux/store';

// import { Provider } from "react-redux";
// import store from './services/Redux/store';
// import i18n from './i18n';
// import 'moment/locale/en-gb';
// import { I18nextProvider } from 'react-i18next';
// import moment from 'moment';
// moment.locale('en-gb'); // sets first day of the week to monday

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
