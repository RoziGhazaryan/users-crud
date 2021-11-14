import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './assets/global.scss'
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router } from "react-router-dom";
import './components/sidebar/sidebar.scss';

function App() {
  return (
    <div className="app d_flex">
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
