import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Catalogue from './components/Catalogue';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Invoice from './components/Invoice';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;