import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// const createAuthor = async () => {
//   const data= await  axios.post('http://localhost:5050/api/author',
//   {
//           fullName: data.fullName,
//           email: data.email
//         }
//   );
//   return data;
// };

function AddAuthor() {
  const queryClient = useQueryClient()
  
    const navigate= useNavigate()



    const createAuthorMutation = useMutation({
      mutationFn: async ({fullName, email})=>{
        return await axios.post('http://localhost:5050/api/author',
        {
                fullName: fullName,
                email: email
              }
        );
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['authors']});
        console.log("author created successfully!")
        navigate('/authors')
      }
    });

   if (createAuthorMutation?.isLoading) {
    return <div>Loading....</div>
   }
   if (createAuthorMutation?.error) {
    return <div> error occured: {createAuthorMutation.error.message}</div>
   }

    const addUser =(data)=>{
      console.log(data)
      const {fullName, email}= data

        createAuthorMutation.mutate({fullName, email})
    
    }



    const{register, handleSubmit} =useForm()
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:px-10 sm:px-6 border mt-24 bg-zinc-100 rounded-3xl shadow-xl ">
    <h1 className="text-3xl font-bold text-center ">Create Your Profile</h1>
    <form onSubmit={handleSubmit(addUser)}>
      <div>
        <Input
          {...register("fullName", {
            required: true,
          })}
          label="Full Name"
          placeholder="Enter your full name..."
        />
      </div>
      <div>
        <Input
          {...register("email", {
            required: true,
          })}
          type='email'
          label="Email"
          placeholder="Email..."
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" text="Add Author" />
      </div>
    </form>
  </div>
  )
}

export default AddAuthor
