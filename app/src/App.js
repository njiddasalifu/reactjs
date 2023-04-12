
import './App.css';
import hello from './components/hello';
import React from 'react';
import { ReactDOM } from 'react';
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);


