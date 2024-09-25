import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './styles/partials/_global.scss';
import Header from "./Components/Header/Header";
import HomePage from './Components/HomePage/HomePage.jsx';

function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
