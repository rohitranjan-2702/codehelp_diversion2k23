import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JAVASCRIPT", value: "javascript" },
  { label: "REACTJS", value: "reactjs" },
  { label: "NODEJS", value: "nodejs" },
  { label: "FIREBASE", value: "firebase" },
  // { label: "JAVASCRIPT", value: "strawberry", disabled: true },
];

const Signuptut = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div class="flex justify-center">
        <div class="w-1/2 m-10 p-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <p class="flex justify-center font-bold text-4xl">Tutor SignUp</p>
          <p class="m-5">Enter Your Fname</p>
          <input
            type="text "
            class=" w-full p-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            placeholder="First name"
          />
          <p class="m-5">Education</p>
          <input
            type="text"
            class="w-full  p-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            placeholder="education"
          />
          <p class="m-5">Enter Email</p>
          <input
            type="text"
            class="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            placeholder="email Id"
          />

          <div className="mt-4">
            <label for="comment" class="text-lg font-semibold ml-6  ">
              Techstack
            </label>
            <pre className="hidden">{JSON.stringify(selected)}</pre>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select Tags"
              hasSelectAll={false}
            />
          </div>
          <div class="flex justify-center">
<button type="button" class=" mt-5 align-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SignUp</button>
</div>
        </div>
      </div>
    </>
  );
};

export default Signuptut;
