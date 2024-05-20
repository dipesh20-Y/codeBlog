import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddAuthor() {
    const navigate= useNavigate()
    const addUser =(data)=>{
     try {
        axios.post('http://localhost:5050/api/author', {
            fullName: data.fullName,
            email: data.email
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
     } catch (error) {
        console.log("user account not created!");
     }
     navigate('/')
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
            // validate:{
            //     matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Enter addess must be a valid address",
            // }
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
