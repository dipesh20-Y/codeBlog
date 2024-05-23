import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { fetchAuthor, fetchBlog } from "@/api/Query";
import axios from "axios";


 const fetchAuthor = async (id) => {
  const { data } = await axios.get(`http://localhost:5050/api/author/${id}`);
  return data;
};


function AuthorDetail() {

    const{id}= useParams()
    console.log(id)

    const {data: author, isLoading, error} = useQuery({
        queryKey:['authors',id],
        queryFn: () => fetchAuthor(id),
       })


       
    // const fetcheBlogByAuthor = useQuery({
    //     queryKey:['blogs',id],
    //     queryFn: fetchBlog(id)
    // })
  //  if (fetcheBlogByAuthor.isLoading) {
  //   return <div>Loading...</div>
  //  }
  //  if (fetcheBlogByAuthor.error) {
  //   return <div>error occured: {fetcheBlogByAuthor.error.message}</div>
  //  }
    
  author && console.log(author)

    if (isLoading) {
        return <div>Loading..</div>
    }
    if (error) {
        return <div> error occured : {error.message}</div>
    }
  return (
    <div className="container  mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>j</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold">{author.fullName}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {author.email}
              </p>
              <p className="text-gray-500 dark:text-gray-400">User ID: {author._id}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 col-span-2 lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                The Importance of Accessibility
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Exploring the key principles of accessible web design and how
                they can benefit all users.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  April 15, 2023
                </span>
                <Link
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div> */}
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                Mastering CSS Grid Layout
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                A comprehensive guide to leveraging the power of CSS Grid for
                responsive and dynamic layouts.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  March 28, 2023
                </span>
                <Link
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                Optimizing React Performance
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Techniques and best practices for improving the performance of
                your React applications.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  February 10, 2023
                </span>
                <Link
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                Exploring the Jamstack Architecture
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Discover the benefits of the Jamstack approach and how it can
                revolutionize your web development.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  January 5, 2023
                </span>
                <Link
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                Unleashing the Power of TypeScript
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Learn how TypeScript can enhance your JavaScript development and
                provide better type safety.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  December 1, 2022
                </span>
                <Link
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                Mastering Git: Essential Commands and Workflows
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Dive deep into the world of Git and learn the fundamental
                commands and best practices for version control.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  November 15, 2022
                </span>
                <Link
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail;
