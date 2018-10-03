import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextProvider from './ContextAPI/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'


ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <ContextProvider>
                <App />
            </ContextProvider>
        </BrowserRouter>
    </AppContainer>,
document.getElementById('root'));

