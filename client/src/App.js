import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

const Layout = ({ children }) => {
  const [darkmode, setDarkMode] = useState(true);

  return (
    <main className={`${darkmode ? 'bg-transparent text-white' : 'bg-white text-black'}`}>
      <Header darkmode={darkmode} setDarkMode={setDarkMode} />
      {children}
      <Footer />
    </main>
  );
}

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products/:id" element={<Layout><Products /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
        <Route path="/search" element={<Layout><Search /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App;
