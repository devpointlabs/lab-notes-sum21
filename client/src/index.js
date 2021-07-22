import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware } from 'devise-axios';
import BookProvider from './providers/BookProvider';
import AuthProvider from './providers/AuthProvider';
import ColProvider from './providers/ColProvider';
import DayProvider from './providers/DayProvider';
import CardProvider from './providers/CardProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BookProvider>
        <DayProvider>
          <ColProvider>
            <CardProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CardProvider>
          </ColProvider>
        </DayProvider>
      </BookProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
