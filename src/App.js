import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import './assets/style/global.scss'
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router } from "react-router-dom";
import './components/sidebar/style.scss';

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
