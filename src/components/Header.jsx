import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

function Header() {

  return (
    <header className=" h-24 flex items-center justify-between px-4 py-3 bg-gray-900 text-white shadow-md">
    <Link className="flex items-center gap-2" href="#">
      <span className="text-lg font-semibold">Blog App</span>
    </Link>
    <nav className="flex items-center gap-8">
      <Link className="text-lg font-bold hover:underline underline-offset-4" href="#">
        Home
      </Link>
      <Link className="text-lg font-bold hover:underline underline-offset-4" href="#">
        Contact 
      </Link>
      <Link>
      <CircleUserRound />
      </Link>
     
    
      
    </nav>
  </header>
  );
}

export default Header;


{/* <div className="flex justify-between   mt-4 items-center w-full">
<div>logo</div>
<div className="w-1/2  relative">
  <ul className="flex justify-evenly gap-8 items-center">
    <div className="flex justify-end">
      <li className="font-bold font-mono mr-8">Home</li>
      <li className="font-bold font-mono ">contact</li>
    </div>
    <div className="flex justify-around">
      <li>
        <div class="relative self-end ">
          <input
            type="text"
            placeholder="Search..."
            className={`text-white w-full text-left py-1 pl-4 pr-4 border rounded-2xl focus:outline-none focus:border-blue-500 bg-transparent focus:bg-white focus:text-black ${
              display ? "block" : "hidden"
            }`}
          />
          <svg
            className={`scale-150  hover:transfo text-lg inset-y-0 right-0 m-3 h-4 w-4 text-gray-400 ${
              display ? "absolute  " : "relative  "
            }`}
            viewBox="2 2 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleSearch}
          >
            <path
              d="M14.9998 14.3665L21.9998 20.3665"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9998 17.3665C9.6305 17.3665 8.32129 16.8441 7.32129 15.8441C6.32129 14.8441 5.79883 13.5349 5.79883 12.1656C5.79883 10.7964 6.32129 9.48714 7.32129 8.48714C8.32129 7.48714 9.6305 6.96468 10.9998 6.96468C12.3691 6.96468 13.6783 7.48714 14.6783 8.48714C15.6783 9.48714 16.2008 10.7964 16.2008 12.1656C16.2008 13.5349 15.6783 14.8441 14.6783 15.8441C13.6783 16.8441 12.3691 17.3665 10.9998 17.3665Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </li>
      <li>
        <div className=" absolute inset-y-0 w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </li>
    </div>
  </ul>
</div>
</div> */}



//search button
{/* <div className="relative  right-0 mt-2 w-56 rounded-md bg-white shadow-lg dark:bg-gray-800">
<div className="p-2">
  <input className="w-full rounded-md px-3 py-2 text-sm" placeholder="Search..." type="text" />
</div>
</div>
<Search /> */}