import { createContext, useContext } from "react";

export const BlogContext = createContext(
    {
        blogs: {
            id : 1,
          title : "hello",
          description : "lorem ipsum",
          author : "John Doe",
        },
        addBlog: (blog) => {},
      }
)

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = BlogContext.Provider
