import blog from "../assets/img/blog.jpg";
import Card from "../components/Card";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const fetchBlogs = async () => {
  const { data } = await axios.get("http://localhost:5050/api/blog");
  return data;
};

function Home() {
  const queryClient = useQueryClient();
  const { blogs, setBlogs } = useBlog();
  const [search, setSearch] = useState("");

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  // console.log(data);
  useEffect(() => {
    if (isSuccess && data) {
      setBlogs(data);
    }
  }, [data, isSuccess]);
  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div> An error occured: {error.message}</div>;
  }

  return (
    <div>
      <div className="bg-gray-100 py-12  pb-24">
        <div className="container mx-auto px-4 md:px-6 ">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 ">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Discover the Latest Trends and Insights
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl ">
                Our blog covers a wide range of topics, from technology and
                business to lifestyle and culture. Stay up-to-date with the
                latest news and trends.
              </p>
              <div>
                <button className="mt-16 border py-4 px-5 bg-gray-700 text-white rounded-2xl hover:bg-gray-900 transition-all mr-8 hover:scale-105 hover:shadow-xl">
                  <Link to="/addauthor">Add Author</Link>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <img
                alt="Blog Hero"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
                src={blog}
                style={{
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-stone-50">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto">
            <div><h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-4 md:mb-0">
              Latest Blog Posts
            </h2></div>
            
          </div>
          <div className="flex items-center justify-center w-full md:w-auto md:ml-4">
              <input
                type="text"
                className="w-full md:w-96 border text-lg py-2 px-3 rounded-2xl border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent focus:bg-white focus:text-black"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
              {search === "" && (
                <div className="-ml-10">
                  <Search />
                </div>
              )}
            </div>
          <div className="flex justify-center md:justify-start w-full md:w-auto mt-4 md:mt-0">
            <button className="border py-4 px-5 bg-gray-700 text-white rounded-2xl hover:bg-gray-900 transition-all hover:scale-105">
              <Link to="/create">Create Blog</Link>
            </button>
          </div>
        </div>
        

        <div className="grid gap-6 mx-auto max-w-5xl items-start py-12 lg:grid-cols-3 lg:gap-12">
          {blogs &&
            blogs.map((blog) => (
              <Card
                title={blog.title}
                content={blog.content}
                key={blog._id}
                id={blog._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
