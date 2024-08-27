import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}/>
        </Routes>
      </Router>
    </div>
  )
}
