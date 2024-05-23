import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Detail from './pages/Detail.jsx'
import { BlogProvider } from './context/BlogContext.jsx'
import AddAuthor from './pages/AddAuthor.jsx'
import Authors from './pages/Authors.jsx'
import EditAuthor from './pages/EditAuthor.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthorDetail from './pages/AuthorDetail.jsx'


const Main =()=>{
const queryClient = new QueryClient()
 
 
  return(
    <React.StrictMode>
   <BlogProvider>

   <QueryClientProvider client={queryClient}>
   <BrowserRouter>
      <Routes>
        <Route  path='/' element={<App />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/addauthor' element={<AddAuthor />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/authors/edit-author/:id' element={<EditAuthor />} />
          <Route path='/author-detail/:id' element={<AuthorDetail />} />
      </Routes>
    </BrowserRouter>
   </QueryClientProvider>
   </BlogProvider>
  </React.StrictMode>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
