import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search({texts, searchResults}) {
  const data = texts;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(data);
  };
  
  console.log(searchResults)
  const [search, setSearch] = useState(false);
  return (
    <div className="flex justify-center flex-col items-center p-8 ">
      <div className="flex flex-col justify-center rounded-xl items-center  h-full shadow-lg bg-gray-100 resize-none border  overflow-auto border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 w-[80%] p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500">
        <h1 className="text-2xl ">Extracted Text</h1>
        <hr className="h-[3px] bg-gray-100" />
        <p className="text-sm">{data}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={copyToClipboard}
          class="text-white mt-4 px-12 bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-gray-800"
        >
          Copy to Clipboard
        </button>
        <button
          type="button"
          onClick={() => setSearch(!search)}
          class="text-white bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center"
        >
          Search
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <hr />
      <hr class="h-px w-full my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    {searchResults && 
          <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
           {searchResults.message}
          </h5>
          <p class="font-normal text-gray-700 ">
          View Document <br />
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {searchResults.location}
            </a>
          </p>
   
  
        </a>
    }
    
    </div>
  );
}

export default Search;
