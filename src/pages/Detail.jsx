import React, { useState, useEffect } from "react";
import { ThumbsUp, ThumbsDown, MessageCircleMore, Eye } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { deleteBlog } from "@/api/Query";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Comments from "@/components/Comments";
import { useBlog } from "@/context/BlogContext";

const fetchBlog = async (id) => {
  const { data } = await axios.get(`http://localhost:5050/api/blog/${id}`);
  return data;
};
const increaseLikesCount = async (id) => {
  const res = await axios.get(`http://localhost:5050/api/blog/likes/${id}`);
  return res;
};

const decreaseLikesCount = async (id) => {
  const res = await axios.get(`http://localhost:5050/api/blog/dislikes/${id}`);
  return res;
};

function Detail() {
  const{blogs, setBlogs} =useBlog()
  const { register, handleSubmit, reset } = useForm();
  const [allComments, setAllComments] = useState([]);
  const [likesCount, setLikesCount] = useState(0);
  const { id } = useParams();
  const queryClient = useQueryClient();
  console.log(id);
  const navigate = useNavigate();

  const { isSuccess, data, isLoading, error } = useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlog(id),
  });
  console.log(data);

  
  const likeMutation = useMutation({
    mutationFn: () => increaseLikesCount(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs", id]);
      setLikesCount(likesCount + 1);
    },
  });

  const dislikeMutation = useMutation({
    mutationFn: () => decreaseLikesCount(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs", id]);
      setLikesCount(likesCount - 1);
    },
  });
  const deleteBlogMutation = useMutation({
    mutationFn: () => deleteBlog(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      navigate("/");
    },
  });

  const createCommentMutation = useMutation({
    mutationFn: async (commentData) => {
      return await axios.post("http://localhost:5050/api/comment/", {
        name: commentData.authorName,
        email: commentData.email,
        blogId: commentData.blogId,
        comment: commentData.Comment,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"] );
      console.log("comment added successfully");
      reset();
      <Toaster />
      navigate(`/detail/${id}`);

    },
  });

  const handleLike = () => {
    likeMutation.mutate();
  };

  const handleDislike = () => {
    dislikeMutation.mutate();
  };

  const handleDeleteBlog = () => {
    deleteBlogMutation.mutate();
    let filter = blogs.filter((blog)=>blog._id != id)
    setBlogs(filter)
    navigate('/')
  };

  useEffect(() => {
    if (isSuccess && data) {
      setLikesCount(data.blog.likes_count);
      setAllComments(data.comments)
    }
  }, [isSuccess, data]);

  allComments && console.log(allComments)

  const commentSubmit = (commentData) => {
    createCommentMutation.mutate(commentData);
  };


  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4 md:py-16 md:px-6 lg:py-20 space-y-24  ">
      <div >
        <article className="max-w-5xl mx-auto border px-3 py-4 shadow-md bg-stone-50">
          <div className="space-y-4">
            <div className="space-y-16">
              <h1 className="text-3xl text-center font-bold underline underline-offset-8">
                {data?.blog.title}
              </h1>

              <p className="text-gray-700 text-md ">
                Created at | {" "}
                {format(new Date(data?.blog.createdAt), "yyyy-MM-dd")}
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-lg">{data?.blog.content}</p>
            </div>

            <div className="flex justify-between ">
              <div className="flex gap-8 mt-8">
                <div className="flex space-x-1">
                  <span>
                    <button onClick={handleLike}>
                      <ThumbsUp className="hover:scale-110" />
                    </button>
                  </span>
                  <span className="mt-1"> {likesCount > 0 && likesCount}</span>
                </div>
                <div className="flex space-x-1">
                  <span className="mt-1">
                    <button onClick={handleDislike}>
                      <ThumbsDown className="hover:scale-110" />
                    </button>
                  </span>
                  <span className="mt-1">
                    {likesCount < 0 && Math.abs(likesCount)}
                  </span>
                </div>
                <div className="flex space-x-1">
                  <span>
                    <MessageCircleMore className="mt-1" />
                  </span>
                  <span className="mt-1"> {data?.comments.length}</span>
                </div>
              </div>
              <div className="flex space-x-1">
                <span>
                  <Eye />
                </span>
                <span>{data?.blog.view_count}</span>
              </div>
            </div>
          </div>
        </article>
        <div className="flex justify-end my-4 mx-8 space-x-4 max-w-6xl">
          <div>
            <Button>Edit</Button>
          </div>
          <div>
            <Button onClick={() => handleDeleteBlog(id)} variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-5xl mx-auto">
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Comments</h2>
          <div className="space-y-4 ">
            {allComments.length>0 ? (
             allComments.map((one)=>
              (
                <Comments
                allComments={allComments}
                setAllComments={setAllComments}
              name={one.name}
              comment={one.comment}
              date={one.createdAt}
              key={one._id}
              id={one._id}
              blogId={id}
              />
              )
             ) 
             
            ) : (
              <div className="text-lg text-center my-16">No Comments to display</div>
            )}
            
          </div>
        </div>
        <h3 className="text-lg font-bold mt-16">Leave a Comment</h3>
        <div className="border px-4 py-4 bg-stone-50">
        <form onSubmit={handleSubmit(commentSubmit)} className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                {...register("authorName", {
                  required: true,
                })}
                label="Author Name"
                placeholder="Id of author..."
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register("email", {
                  required: true,
                })}
                label="Email"
                placeholder="Email..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <Input
              {...register("blogId", {
                required: true,
              })}
              label="BlogId"
              placeholder="BlogId..."
            />
          </div>
          <div className="space-y-2">
            <Input
              {...register("Comment", {
                required: true,
              })}
              type="textarea"
              label="Comment"
              placeholder="Comment..."
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Detail;
