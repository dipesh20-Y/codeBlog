import React, { useEffect, useState } from 'react'
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useBlog } from '@/context/BlogContext';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBlog, updateExistingBlog } from '@/api/Query';

function EditBlog() {
    const{blogs, setBlogs}= useBlog()
    const{id} = useParams()
    const [updatedBlog, setUpdatedBlog] = useState()
    const{register, handleSubmit, reset} = useForm()
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {data:blog, isSuccess} = useQuery({
        queryKey:['blogs',id],
        queryFn:()=> fetchBlog(id)
    })

 useEffect(()=>{
    if (blog && isSuccess) {
        setUpdatedBlog(blog)
    }
 },[blog, isSuccess])
 updatedBlog && console.log(updatedBlog)

 const updateBlogMutation = useMutation({
    mutationFn: updateExistingBlog,
    onSuccess:()=>{
        console.log("Successfully updated!!");
        reset();
        queryClient.invalidateQueries(['blogs'])
        navigate(`/detail/${id}`)
    },
    onError: (error) => {
        console.error('Error updating author:', error);
      },
 })

 const handleUpdateBlog =(data)=>{
    console.log(data)
    setUpdatedBlog(data)
    updateBlogMutation.mutate({id, ...data})
    const update = blogs?.map((blog)=> 
    blog._id ==id ? {...blog, title: data.title, author: data.author, content: data.content} : blog )

    setBlogs(update)
 }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:px-10 sm:px-6 border mt-24 bg-zinc-100 rounded-3xl shadow-xl my-16">
      <h1 className="text-3xl font-bold text-center ">Update Blog</h1>
      <form onSubmit={handleSubmit(handleUpdateBlog)}>
        <div>
          <Input
            {...register("title", {
              required: true,
            })}
            defaultValue={updatedBlog?.blog.title}
            label="Title"
            placeholder="title of blog..."
          />
        </div>
        <div>
          <Input
            {...register("authorId", {
              required: true,
            })}
            defaultValue={updatedBlog?.blog.author}
            label="AuthorId"
            placeholder="Id of author..."
          />
        </div>

        <div>
          <Input
            {...register("content", {
              required: true,
            })}
            defaultValue={updatedBlog?.blog.content}
            label="Description"
            placeholder="Content..."
            type="textarea"
          />
        </div>
        <div className="flex justify-end">
          <Button> Update</Button>
        </div>
      </form>
    </div>
  );
  
}

export default EditBlog
