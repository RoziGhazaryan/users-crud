import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './assets/global.scss'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import './components/navbar/navbar.scss';

function App() {
  return (
    <div className="app d_flex">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
