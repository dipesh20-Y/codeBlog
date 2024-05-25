import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAuthor, fetchBlogs } from "@/api/Query";
import axios from "axios";
import Card from "@/components/Card";


function AuthorDetail() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const { id } = useParams();
  console.log(id);

  const { data: author, isLoading, error } = useQuery({
    queryKey: ['authors', id],
    queryFn: () => fetchAuthor(id),
  });

  const { data: blogs, isLoading: blogLoading, error: blogError, isSuccess } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  useEffect(() => {
    if (isSuccess && blogs) {
      setAllBlogs(blogs);
    }
  }, [isSuccess, blogs]);

  allBlogs && console.log(allBlogs)

  useEffect(() => {
    if (author && allBlogs.length > 0) {
      const filtered = allBlogs.filter((blog) => {
        return blog.author === author._id;
      });
      setFilteredBlogs(filtered);
    }
  }, [author, allBlogs]);

  filteredBlogs && console.log(filteredBlogs);

  author && console.log(author._id);

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div> error occurred : {error.message}</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback>{author.fullName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{author.fullName}</h2>
              <p className="text-gray-500 dark:text-gray-400">{author.email}</p>
              <p className="text-gray-500 dark:text-gray-400">User ID: {author._id}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 col-span-2 lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <div className="flex justify-around mx-auto max-w-5xl items-start py-12 lg:grid-cols-3 lg:gap-12">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Card key={blog._id} title={blog.title} content={blog.content} />
              ))
            ) : (
              <p>No blog posts found for this author.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail;
