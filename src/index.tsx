import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';


import reportWebVitals from './reportWebVitals';

//pages
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Reloaded from './pages/projectPages/Reloaded';

//components
import Header from './components/Header'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <head>
      <title>Bassam Ahmed</title>
      
    </head>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects/reloaded' element={<Reloaded />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
