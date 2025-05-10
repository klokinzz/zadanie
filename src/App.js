import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import './styles/main.css';
import Head from './elements/head';
import Main from './elements/main';
import Footer from './elements/footer';

function App() {
  return (
    <Router>
      <div className="app-grid">
        <Head />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;