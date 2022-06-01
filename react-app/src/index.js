import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from "./Store/Store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Router from "./Components/Router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
;
