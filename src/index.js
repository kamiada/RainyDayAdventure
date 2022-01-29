import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  BrowserRouter as Router } from "react-router-dom"
import App from './App.js';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );