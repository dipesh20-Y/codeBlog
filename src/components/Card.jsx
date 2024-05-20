import React from "react";
import blog from "../assets/img/blog1.jpg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div>
      <div >
        <div className="border px-5 py-4 shadow-lg focus: border-gray-400 rounded-t-xl hover:translate-x-0.5 ease-in-out duration-300">
          <div>
            <img
              src={blog}
              alt="blog img"
              className="mx-auto overflow-hidden rounded-t-xl object-cover object-center"
              height="310"
              width="550"
            />
          </div>
          <h3 className="text-xl font-bold mt-8 mb-4">Title of the blog</h3>
          <p className="text-gray-500 mb-4 overflow-hidden text-ellipsis">
            Explore the latest trends and innovations shaping the future of web
            development.
          </p>
          <Link
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline "
            to='/detail'
          >
            Read More
           <div className="h-5">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
           </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
