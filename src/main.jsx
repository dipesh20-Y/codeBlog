import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import Detail from './pages/Detail.jsx'
import { BlogProvider } from './context/BlogContext.jsx'
import AddAuthor from './pages/AddAuthor.jsx'
import Authors from './pages/Authors.jsx'
import EditAuthor from './pages/EditAuthor.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthorDetail from './pages/AuthorDetail.jsx'
import Layout from './pages/Layout.jsx'
import EditBlog from './pages/EditBlog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/addauthor' element={<AddAuthor />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/authors/edit-author/:id' element={<EditAuthor />} />
          <Route path='/author-detail/:id' element={<AuthorDetail />} />
          <Route path='/edit-blog/:id' element={<EditBlog />} />
      </Route>
  )
)
 const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </BlogProvider>
  </React.StrictMode>
)

// const Main =()=>{
// const queryClient = new QueryClient()
 
 
//   return(
//     <React.StrictMode>
//    <BlogProvider>
//    <QueryClientProvider client={queryClient}>
    
//    <BrowserRouter>
// {/* <Header /> */}

//       <Routes>
//         <Route  path='/' element={<App />}/>
//           <Route path='/home' element={<Home />} />
//           <Route path='/create' element={<Create />} />
//           <Route path='/detail/:id' element={<Detail />} />
//           <Route path='/addauthor' element={<AddAuthor />} />
//           <Route path='/authors' element={<Authors />} />
//           <Route path='/authors/edit-author/:id' element={<EditAuthor />} />
//           <Route path='/author-detail/:id' element={<AuthorDetail />} />
//       </Routes>
//        {/* <Footer /> */}
//     </BrowserRouter>
   
//    </QueryClientProvider>
//    </BlogProvider>

//   </React.StrictMode>
//   )

// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
