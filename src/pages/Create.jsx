import React,{useId} from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

function Create() {
  const { register, handleSubmit } = useForm();

  const create =  (data) => {
    console.log(data);
    try {
        const result = axios.post("http://localhost:5050/api/blog/", {
        title: data.title,
        content: data.content,
        authorId:1 
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(result)
    } catch (error) {
      console.log("blog not added");
    }
   
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:px-10 sm:px-6 border mt-24 bg-zinc-100 rounded-3xl shadow-xl ">
      <h1 className="text-3xl font-bold text-center ">Create New Blog Post</h1>
      <form onSubmit={handleSubmit(create)}>
        <div>
          <Input
            {...register("title", {
              required: true,
            })}
            label="Title"
            placeholder="title of blog..."
          />
        </div>
        <div>
          <Input
            {...register("author", {
              required: true,
            })}
            label="Author"
            placeholder="Name of author..."
          />
        </div>

        <div>
          <Input
            {...register("content", {
              required: true,
            })}
            label="Description"
            placeholder="Content..."
            type="textarea"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" text="Add Blog" />
        </div>
      </form>
    </div>
  );
}

export default Create;

//for image

{
  /* <div>
          <label className="block text-lg " htmlFor="image">
            Feature Image
          </label>
          <div className="bg-white mt-1 min-h-64 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center mt-8">
              <svg
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  className="relative cursor-pointer font-lg text-indigo-600   hover:text-indigo-700"
                  htmlFor="image"
                >
                  <span>Upload a file</span>
                  <input
                    className="sr-only"
                    id="image"
                    name="image"
                    required
                    type="file"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div> */
}
