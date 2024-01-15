// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import PlantCare from './components/pages/PlantCare';
import Blog from './components/pages/Blogs';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/plantcare" element={<PlantCare />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
