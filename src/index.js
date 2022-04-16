import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Details from './pages/Details';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/search/:search' element={<SearchPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
