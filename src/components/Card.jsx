import React from "react";
import { Link } from "react-router-dom";

function Card({title, content, id}) {
  return (
    <div>
      <div >
        <div className="border px-3 w-80 py-4 shadow-lg focus: border-gray-400 rounded-t-xl hover:translate-x-0.5 ease-in-out duration-300">
         
          <h3 className="text-xl font-bold mt-8 mb-4 border-b-2">{title}</h3>
          <p className="text-gray-500 mb-4 line-clamp-4 ">
            {content}
          </p>
          <Link
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline "
            to={`/detail/${id}`}
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
