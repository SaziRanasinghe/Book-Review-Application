// src/App.js
import React from 'react';
import './App.css';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import Login from './components/Login';
import Signup from './components/Signup';
import Hero from './components/Hero';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
       <Header />
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/add-review" element={<ReviewForm />} />
      <Route path="/review-list" element={<ReviewList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        
        
      </Routes>
   
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
