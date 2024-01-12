import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/Home';
import APropos from './pages/APropos';
import Header from './components/Header';
import Footer from './components/Footer';
import Fiche from './pages/Fiche';
import './styles/layout.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element = {<App />} />
        <Route path='/APropos' element = {<APropos />} />
        <Route path='/Erreur' />
        <Route path='/Fiche/:id' element = {<Fiche />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
