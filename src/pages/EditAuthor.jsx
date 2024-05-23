import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


 const updateExistingAuthor = async (id, data) => {
  const response= await axios.put(`http://localhost:5050/api/author/${id}`, data);
  return response.data;
};


const fetchAuthor = async (id) => {
  const { data } = await axios.get(`http://localhost:5050/api/author/${id}`);
  return data;
};




function EditAuthor() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  console.log(id);
  const queryClient = useQueryClient()
 

   const {data:author, isLoading, error} = useQuery({
    queryKey:['authors',id],
    queryFn: () => fetchAuthor(id),
   })

   
 if (isLoading) {
  return <div>Loading....</div>
 }

 if (error) {
  return <div> error occured: {error.message}</div>
 }


  const UpdateAuthorMutation = useMutation({
    mutationFn: updateExistingAuthor,
    onSuccess:()=>{
      console.log("successfully updated!!")
      queryClient.invalidateQueries({ queryKey: ["authors"] });
    },
    onError: (error) => {
      console.error('Error updating blog post:', error);
    },
  })


const updateAuthor = (data)=>{
  UpdateAuthorMutation.mutate(id, data)
}


  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:px-10 sm:px-6 border mt-24 bg-zinc-100 rounded-3xl shadow-xl ">
      <h1 className="text-3xl font-bold text-center ">Update Your Profile</h1>
      <form onSubmit={handleSubmit(updateAuthor)} >
        <div>
          <Input
            {...register("fullName", {
              required: true,
            })}
            defaultValue={author?.fullName}
            label="Full Name"
            placeholder="Enter your full name..."
          />
        </div>
        <div>
          <Input
            {...register("email", {
              required: true,
            })}
            defaultValue={author?.email}
            type="email"
            label="Email"
            placeholder="Email..."
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" text="Update" />
        </div>
      </form>
    </div>
  );
}

export default EditAuthor;
