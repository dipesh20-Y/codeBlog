import React, { useState, useEffect } from "react";
import { ThumbsUp, ThumbsDown, MessageCircleMore, Eye } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
// import Button from "@/components/Button";
import { deleteBlog, fetchAuthor } from "@/api/Query";
import { Button } from "@/components/ui/button";

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
  
  const [likesCount, setLikesCount] = useState(0);
  const { id } = useParams();
  const queryClient = useQueryClient();
  console.log(id)
  const navigate =useNavigate()

  const { isSuccess, data, isLoading, error } = useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlog(id),
  });
  console.log(data)

  const{data:authorData, error:authorError}=useQuery({
    queryKey:['authors', data?.blog.author],
    queryFn: ()=>fetchAuthor(data?.blog.author),
    enabled: !!data?.blog.author
  })
  
 
 
  console.log(authorData)
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
    mutationFn: ()=>deleteBlog(id),
    onSuccess:()=>{
      queryClient.invalidateQueries(['blogs'])
      navigate('/') 
    }
  })

  const handleLike = () => {
    likeMutation.mutate();
    //  const {isSuccess} = useQuery({
    //   queryKey: ['blogs',id],
    //   queryFn: fetchLike(id)
    //  })
  };
  const handleDislike = () => {
    dislikeMutation.mutate();
  };


  const handleDeleteBlog =()=>{
    deleteBlogMutation.mutate()
  }

  useEffect(() => {
    if (isSuccess && data) {
      setLikesCount(data.blog.likes_count);
    }
  }, [isSuccess, data]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4 md:py-16 md:px-6 lg:py-20 space-y-24 ">
      <div>
        <article className="max-w-5xl mx-auto border px-3 py-4">
          <div className="space-y-4">
            <div className="space-y-16">
              <h1 className="text-3xl text-center font-bold">
                {data?.blog.title}
              </h1>

              <p className="text-gray-700 text-md ">
                By John Doe |{" "}
                {format(new Date(data?.blog.createdAt), "yyyy-MM-dd")}
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-lg">{data?.blog.content}</p>
            </div>

            <div className="flex justify-between space-x-">
              <div className="flex gap-6">
                <div className="flex space-x-1">
                  <span>
                    <button onClick={handleLike}>
                      <ThumbsUp className="hover:scale-110" />
                    </button>
                  </span>
                  <span className="mt-1"> {likesCount>0 && likesCount}</span>
                </div>
                <div className="flex space-x-1">
                  <span className="mt-1">
                    <button onClick={handleDislike}>
                      <ThumbsDown className="hover:scale-110" />
                    </button>
                  </span>
                  <span className="mt-1">{likesCount<0 && Math.abs(likesCount)}</span>
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
          <Button >Edit</Button>
          </div>
          <div>
            <Button
            onClick={()=>handleDeleteBlog(id)}
            variant = 'destructive'>Delete</Button>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4 max-w-5xl mx-auto border px-4 py-5">
          <h2 className="text-2xl font-bold">Comments</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Olivia Davis</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">October 8, 2023</div>
                </div>
                <p className="mt-2">
                  This is a really interesting story! I love how the king tried to tax the jokes, but the people just
                  couldn't stop laughing. It's a great example of how humor can be a powerful force.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">October 9, 2023</div>
                </div>
                <p className="mt-2">
                  I really enjoyed reading this! The king's attempt to tax the jokes is both hilarious and a bit sad.
                  It's a great commentary on the power of laughter and the futility of trying to control it.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Leave a Comment</h3>
            <form className="mt-4 space-y-4">
              <Textarea className=" min-h-24 resize-none " placeholder="Write your comment here..." />
              <Button>Submit</Button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Detail;
