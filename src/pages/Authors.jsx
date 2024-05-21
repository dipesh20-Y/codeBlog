import React, {useEffect} from "react";
import Table from "../components/Table";
import axios from "axios";
import { useBlog } from "../context/BlogContext";

function Authors() {
  const{authors, setAuthors}= useBlog()

  useEffect(()=>{
    axios.get('http://localhost:5050/api/author')
    .then( (response)=> {
      setAuthors(response.data)
      console.log(response.data)
     
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
     console.log( "All authors extracted")
    });
  },[])
  
  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Blog Authors
        </h1>
      </div>
      <div className="mt-8 space-y-6">
        <div className="border rounded-lg overflow-hidden">
        <table className="table-auto w-full">
            <thead className='border-b-2 '>
              <tr className='h-12 '>
                <th className="text-start px-8 py-4">Name</th>
                <th className='py-4'>Email</th>
                <th className="text-right px-8 py-4">Actions</th>
              </tr>
            </thead>
            {authors && (
            authors.map((author)=>
              <Table fullName={author.fullName} email={author.email} key={author._id} id={author._id}/>
            )
          )}
            </table>
        </div>
      </div>
    </div>
  );
}

export default Authors;
