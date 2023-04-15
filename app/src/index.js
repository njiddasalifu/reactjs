import React from 'react';
import ReactDOM from 'react-dom/client';

import Hello from './components/hello';
import Expense from './components/expense';
import Car from './components/car';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Hello />
   <Expense />
   <Car color= "red" name= "Benz" />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

