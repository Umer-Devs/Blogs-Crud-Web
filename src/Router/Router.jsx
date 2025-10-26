import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateBlog, Home, Login, Signup, ViewBlog } from '../Pages'

const Router = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/all-blogs' element={<ViewBlog/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default Router
