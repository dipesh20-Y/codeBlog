import { createContext, useContext, useState } from "react";

export const BlogContext = createContext()

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({children})=>{
  const[authors, setAuthors] = useState();
  const[blogs, setBlogs] = useState()


  const blogContextValue = {
    authors,
    setAuthors,
    blogs,
    setBlogs
  };
  
  return (
    <BlogContext.Provider value={blogContextValue}>
      {children}
    </BlogContext.Provider>
  );
}





