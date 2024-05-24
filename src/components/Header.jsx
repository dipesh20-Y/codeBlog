import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

function Header() {

  return (
    <header className=" h-24 flex items-center justify-between px-4 py-3 bg-gray-900 text-white shadow-md">
    <Link to='/' className="flex items-center gap-2" >
      <span className="text-lg font-semibold">Blog App</span>
    </Link>
    <nav className="flex items-center gap-8">
      <NavLink className={({isActive})=> `block font-bold text-lg py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-300": "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
        Home
      </NavLink>
      <Link to='/' className=" block text-lg py-2 pr-4 pl-3  font-bold   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0" >
        Contact 
      </Link>
      <Link to='/authors'>
      <CircleUserRound />
      </Link>
     
    
      
    </nav>
  </header>
  );
}

export default Header;


