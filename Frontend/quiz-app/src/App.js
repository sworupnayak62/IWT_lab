
import './App.css';
import React from "react";
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subject from './components/Subject';
import Question from './components/Question';
import Mark from './components/Mark';
import { Login } from './components/log/Login';
import Signup from './components/log/Signup';


function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/question" element={<Question />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>


    <div className="App">
    </div>
    </>
  );
}

export default App;
