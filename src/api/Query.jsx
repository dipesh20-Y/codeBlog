 import axios from "axios";

export const fetchAuthors = async () => {
    const { data } = await axios.get("http://localhost:5050/api/author");
    console.log(data);
    return data;
  };

  export const deleteAuthor = async (id) => {
    const response= await axios.delete(`http://localhost:5050/api/author/${id}`);
    return response.json();
  };

 export const fetchAuthor = async (id) => {
    const { data } = await axios.get(`http://localhost:5050/api/author/${id}`);
    return data;
  };
  
 export const fetchBlog = async (id) => {
    const { data } = await axios.get(`http://localhost:5050/api/blog/${id}`);
    return data;
  };

  
  export const deleteBlog = async (id) => {
    const response= await axios.delete(`http://localhost:5050/api/blog/${id}`);
    return response.json();
  };