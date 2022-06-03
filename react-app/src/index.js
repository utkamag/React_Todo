import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store, persistor} from "./Store/Store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Router from "./Components/Router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </React.StrictMode>
        </PersistGate>
    </Provider>
)
;
