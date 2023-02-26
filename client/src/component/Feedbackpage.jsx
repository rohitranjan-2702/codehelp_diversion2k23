import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { useNavigate } from "react-router-dom";


const Feedbackpage = () => {
  const navigate=useNavigate();
  const handleClick = () => {
    alert("Rating is done");
    navigate("/")
  }
  return (
   <>
    <div class="m-10">
        
 <p for="message" class=" pb-4 font-bold mb-2 text-sm  text-gray-900 dark:text-white flex justify-center  ">Feedback</p>
 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    <br />
    <p class="flex justify-center font-bold">Rate Your Tutor</p>

    
    
<div class="flex justify-center text-5xl text-amber-400 mb-4">
<Rater total={5} rating={2}  />
</div>
<div class="flex justify-center">
<button type="button" onClick={() => handleClick()} class="align-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
</div>
    </div>
   </>
  )
}

export default Feedbackpage