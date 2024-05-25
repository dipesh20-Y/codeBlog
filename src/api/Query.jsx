 import axios from "axios";

export const fetchAuthors = async () => {
    const { data } = await axios.get("http://localhost:8080/api/author");
    console.log(data);
    return data;
  };

  export const deleteAuthor = async (id) => {
    const response= await axios.delete(`http://localhost:8080/api/author/${id}`);
    return response.json();
  };

 export const fetchAuthor = async (id) => {
    const { data } = await axios.get(`http://localhost:8080/api/author/${id}`);
    return data;
  };
  
 export const fetchBlog = async (id) => {
    const { data } = await axios.get(`http://localhost:8080/api/blog/${id}`);
    return data;
  };

  
  export const deleteBlog = async (id) => {
    const response= await axios.delete(`http://localhost:8080/api/blog/${id}`);
    return response.json();
  };
  export const fetchBlogs = async () => {
    const { data } = await axios.get("http://localhost:8080/api/blog");
    return data;
  };

  export const fetchComment = async ()=>{
    const {data} = await axios.get('http://localhost:8080/api/comment');
    return data
  }

  export const deleteComment = async (id) => {
    const response= await axios.delete(`http://localhost:8080/api/comment/${id}`);
    return response.json();
  };

  export const updateExistingAuthor = async ({ id, fullName, email }) => {
    const response = await axios.put(`http://localhost:8080/api/author/${id}`, { fullName, email });
    return response.data;
  };

  export const updateExistingBlog = async ({ id, title, authorId, content }) => {
    const response = await axios.put(`http://localhost:8080/api/blog/${id}`, { title, authorId, content });
    return response.data;
  };
  export const updateExistingComment= async ({ id, name, blogId, comment }) => {
    const response = await axios.put(`http://localhost:8080/api/comment/${id}`, {  name, blogId, comment });
    return response.data;
  };
  