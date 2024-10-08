import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './styles/partials/_global.scss';

import Header from "./Components/Header/Header";
import HomePage from './Components/HomePage/HomePage.jsx';
import ArticlesPage from './Components/ArticlesPage/ArticlesPage.jsx';
import ArticlePage from './Components/ArticlePage/ArticlePage.jsx';
import FormPostPage from './Components/FormPostPage/FormPostPage.jsx'
import Post from './Components/Post/Post.jsx';
import ThisComponentPosts from './Components/ThisComponentPosts/ThisComponentPosts.jsx';
import Posts from './Components/Posts/Posts.jsx';
function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='computerComponents' element={<ArticlesPage />}/>
      <Route path="computerComponents/:id" element={<ArticlePage />}/>
      <Route path='computerComponents/:id/posts' element={<FormPostPage />}/>
      <Route path='thisComponentPosts/:id/posts' element={<ThisComponentPosts />} />
      <Route path='/post/:id' element={<Post />}/>
      <Route path='/posts' element={< Posts/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
