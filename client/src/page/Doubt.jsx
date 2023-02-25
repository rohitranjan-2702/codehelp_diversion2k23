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

const Doubt = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <h1 class="flex justify-center mt-10 mb-10 font-bold text-4xl flex-wrap">
        Ask your Doubt
      </h1>
      <form>
        <div class="w-1/2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 m-auto mt-12 mb-20">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="text-lg font-semibold">
              Your Question
            </label>
            {/* <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 border-black " placeholder="Write your Question..." required></textarea> */}
            <textarea
              id="chat"
              rows="1"
              class="block p-2.5 mt-2 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your Question..."
            ></textarea>
            <div className="mt-4">
              <label for="comment" class="text-lg font-semibold mb-2">
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
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              ASK
            </button>
           </div>
        </div>
      </form>
    </>
  );
};

export default Doubt;
