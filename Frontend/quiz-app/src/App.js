
import './App.css';
import React from "react";
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subject from './components/Subject';
import Question from './components/Question';


function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </Router>


    <div className="App">
    </div>
    </>
  );
}

export default App;
