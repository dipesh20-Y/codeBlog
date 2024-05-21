import axios from "axios";
import React from "react";
import { useBlog } from "../context/BlogContext";

function Table({ fullName, email,id }) {
    const {authors, setAuthors} =useBlog()

    const editAuthor=(id)=>{

    }

    const deleteAuthor =async (id)=>{
        try {
            const res = await axios.delete(`http://localhost:5050/api/author/${id}`)
            setAuthors(authors.filter((author)=> author._id!= id))

            console.log("Blog deleted successfully", res.data)
        } catch (error) {
            console.log("Error deleting blog", error)
        }
    }

  return (
    <tbody>
      <tr className="text-center border-b-2 ">
        <td className="font-medium ">
          <div className="flex  items-center gap-4 px-3">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full "></div>
            <span className="font-medium text-gray-700 ">{fullName}</span>
          </div>
        </td>

        <td>{email}</td>
        <td className="text-right px-4 py-4">
          <div className="flex items-center justify-end gap-4">
            <button
            onClick={editAuthor(id)}
            className=" border py-2 px-3 rounded-lg mb-2 bg-gray-600 text-white hover:bg-gray-800 ">
              Edit
            </button>
            <button 
            onClick={()=>{
                deleteAuthor(id)
            }}
            className=" border py-2 px-3 rounded-lg mb-2 bg-gray-600 text-white hover:bg-gray-800">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
