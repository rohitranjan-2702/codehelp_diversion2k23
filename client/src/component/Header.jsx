import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Header = () => {

  const [hamOpen, sethamOpen] = useState(false);

  const toggle = () => {
    sethamOpen(!hamOpen)
  }
  // const { isLoggedIn, setIsLoggedIn, setUserName } = useContext(LoginContext);
  const navigate = useNavigate();

  // const handleLogOut = () => {
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   setUserName("");
  //   navigate("/login");
  // };

  return (
    <>
    <div class="shadow-lg">
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
<div class="container flex flex-wrap items-center justify-between mx-auto">
<a href="/" class="flex items-center">
   <img src="https://res.cloudinary.com/dlmgrochr/image/upload/v1677308464/image-removebg-preview_10_ewg8zc.png" class="h-6 mr-3 sm:h-9" alt="Logo" />
   <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CodeHelp</span>
</a>
<div class="flex md:order-2">
   
   {/* {isLoggedIn ? ( */}
   
   <div>
                <button
                  className="text-md px-6 py-3 font-semibold text-blue-600 transition-all hover:text-blue-700 disabled:bg-gray-400"
                  // onClick={() => handleLogOut()}
                >
                  Logout
                </button>
              </div>
            {/* ) : ( */}
              <div>
                <button
                  className="text-md px-6 py-3 font-semibold text-blue-600 transition-all hover:text-blue-700 disabled:bg-gray-400"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="text-md rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-400"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>
            {/* )} */}


   <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" onClick={toggle}>
     <span class="sr-only">Open main menu</span>
     <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
 </button>

 
</div>

<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
 <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
   <li>
     <a href="/" class="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Home</a>
   </li>
   <li>
     <a href="/doubt" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ask a Doubt</a>
   </li>
   <li>
     <a href="/doubtSection" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Doubts-T</a>
   </li>
   <li>
     <a href="/profile" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
   </li>
 </ul>
</div>
</div>
</nav>
</div> 

 </>
  )
}

export default Header