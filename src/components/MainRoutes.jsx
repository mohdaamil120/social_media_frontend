import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import CreatePost from './CreatePost'
import Posts from './Posts'

export default function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/add' element={<CreatePost/>}/>
            <Route path='/posts' element={<Posts/>}/>
        </Routes>
    </div>
  )
}
