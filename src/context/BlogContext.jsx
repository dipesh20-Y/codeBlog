import { Children, createContext, useContext, useState } from "react";

export const BlogContext = createContext()

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({children})=>{
  const[authors, setAuthors] = useState()


  const blogContextValue = {
    authors,
    setAuthors
  };
  
  return (
    <BlogContext.Provider value={blogContextValue}>
      {children}
    </BlogContext.Provider>
  );
}





