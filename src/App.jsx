import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './styles/partials/_global.scss';
import Header from "./Components/Header/Header";
import HomePage from './Components/HomePage/HomePage.jsx';
import ArticlesPage from './Components/ArticlesPage/ArticlesPage.jsx';
import ArticlePage from './Components/ArticlePage/ArticlePage.jsx';
function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='computerComponents' element={<ArticlesPage />}/>
      <Route path="computerComponents/:id" element={<ArticlePage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
