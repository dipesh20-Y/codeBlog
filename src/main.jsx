import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Detail from './pages/Detail.jsx'
import { BlogProvider } from './context/BlogContext.js'
import AddAuthor from './pages/AddAuthor.jsx'


const Main =()=>{

  const[blogs, setBlogs] = useState([])
  const[newBlog, setNewBlog] =  useState({})

  const addBlog =(e)=>{
      setBlogs((prevBlog)=>[...prevBlog, newBlog ])
  }

  return(
    <React.StrictMode>
   <BlogProvider value={{blogs, addBlog}}>
   <BrowserRouter>
      <Routes>
        <Route  path='/' element={<App />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create newBlog={newBlog} setNewBlog={setNewBlog}/>} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/addauthor' element={<AddAuthor />} />
      </Routes>
    </BrowserRouter>
   </BlogProvider>
  </React.StrictMode>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
