import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterDetail from './components/CharacterDetail';
import CardContainer from './components/CardContainer';

import './styles/App.css';

function App() {
  return (
    <>
    <header>
     <Header />
    </header>
    
    <main>
    <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/details/:name" element={<CharacterDetail />} />
        </Routes>
      

    </main>

    <footer>
      <Footer />
    </footer>
    </>
  );
}
    
 
    

export default App;
