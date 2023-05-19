import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EsignatureApp from './project-1_signatureApp/Esignature';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import RandomizeColor from './project-2_random_color/randcol';
import LikePhotoApp from './project-3_like_me/like';
import Testimonial from './project-4_Testimonials/testimonial';
import LayredCard from './mycomponents/layredcard';
import AlertComponent from './project-5_alert/alertComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertComponent type={"success"} message={"successful Login"} delaytime={20000} />
    <AlertComponent type={"danger"} message={"successful Login"} delay={true} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
