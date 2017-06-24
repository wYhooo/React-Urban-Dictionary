import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { RandomBtn, BackToTopBtn } from './components/FloatBtns';
import AppRouter from './routers/index';

const App = () => (
  <Router history={'history'}>
    <div className="app">
      <SearchBar/>
      <AppRouter/>
      <RandomBtn/>
      <BackToTopBtn/>
    </div>
  </Router>
);

export default App;
