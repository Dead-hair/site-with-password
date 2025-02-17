import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Calculator from './components/Calculator';
import ProtectedPage from './components/ProtectedPage';
import './App.css';


const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/calculator">Калькулятор финансов</Link>
          </li>
          <li>
            <Link to="/protected">Защищенная страница</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
