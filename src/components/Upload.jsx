import { useState } from "react";

function App({ setPdf, setActiveStep, setImages }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setPdf(file);
    const postPdf = async (pdf) => {
      const formData = new FormData();
      formData.append('pdf', pdf);
      const response = await fetch('http://127.0.0.1:8000/api/text/', {
        method: 'POST',
        body: formData,

      });
      const data = await response.json();
      console.log(data);
      setImages(data.processed_images);
      setActiveStep(1);
    }

    postPdf(file);

    // Assuming setActiveStep is a function to update active step state
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-[50vh] flex flex-col items-center justify-center p-6 border-slate-600 shadow-2xl">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PDFs: Max 25 Mbs
            </p>
          </div>
          <input id="dropzone-file" type="file"   onChange={handleFileChange} name="fileInput"/>
        </label>
        <button
          className="px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          type="submit"
        >
          Upload
        </button>
      </div>
    </form>
  );
}

export default App;
