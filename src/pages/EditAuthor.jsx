import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { fetchAuthor } from "@/api/Query";
import { useBlog } from "@/context/BlogContext";
import { updateExistingAuthor } from "@/api/Query";



function EditAuthor() {
  const { authors, setAuthors } = useBlog();
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const [updatedAuthor, setUpdatedAuthor] = useState(null); 

  const { data: author, isLoading, error, isSuccess } = useQuery({
    queryKey: ['authors', id],
    queryFn: () => fetchAuthor(id),
  });

  useEffect(() => {
    if (isSuccess && author) {
      reset({ fullName: author.fullName, email: author.email });
    }
  }, [isSuccess, author, reset]);

  const UpdateAuthorMutation = useMutation({
    mutationFn: updateExistingAuthor,
    onSuccess: (data) => {
      console.log("Successfully updated!!", data);
      queryClient.invalidateQueries(["authors"]);
      navigate('/authors');
    },
    onError: (error) => {
      console.error('Error updating author:', error);
    },
  });

  const updateAuthor = (data) => {
    setUpdatedAuthor(data);
    UpdateAuthorMutation.mutate({ id, ...data });
    const updatedAuthors = authors.map(author =>
      author._id === id ? { ...author, fullName: data.fullName, email: data.email } : author
    );
    setAuthors(updatedAuthors);
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div> Error occurred: {error.message}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:px-10 sm:px-6 border mt-24 bg-zinc-100 rounded-3xl shadow-xl mb-16">
      <h1 className="text-3xl font-bold text-center">Update Your Profile</h1>
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
