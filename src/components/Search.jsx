import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const data =
  "महाकोशल, कर्नाटक, आंध्र, तामिळनाडू, केरळ यांचे प्रतिनिधित्व करीत होते. १३ डिसेंबर १९४८ रोजी या कमिशनचा रिपोर्ट सादर झाला. १,००० लेखी निवेदने या कमिशनकडे आली होती आणि त्यांनी ७०० साक्षीदारांच्या मुलाखती घेतल्या होत्या. भाषावर प्रांत रचनेच्या बाजूने असणारी मंडळी या कमिशनच्या रिपोर्टमुळे मोठ्या प्रमाणात खवळली. कारण, भाषेच्या पायावर किंवा प्रामुख्याने भाषेचा विचार करून प्रांत रचना करणे हे देशाच्या व्यापक हितात बसणारे नाही आणि त्यामुळे त्या आधारावर काही कार्यवाही करू नये असा अहवाल या कमिशनने दिला होता. या अहवालामुळे काँग्रेस पक्षात जो असंतोष तयार झाला त्यामुळे जयपूरला झालेल्या अधिवेशनात भाषावर प्रांत रचनेच्या मागणीचा फेरविचार करण्यासाठी एक उप-समिती नेमण्यात आली. यात पंडित जवाहरलाल नेहरू, वल्लभभाई पटेल आणि काँग्रेसचे तत्कालीन अध्यक्ष पट्टाभी सीतारामय्या अजा तीन वजनदार व्यक्तींचा समावेश होता. या उप-समितीचा रिपोर्ट ६ एप्रिल १९४९ रोजी प्रसारित करण्यात आला. या अहवालात भाषावर प्रांत रचनेचा प्रयत्न केल्यास जे दूरगामी परिणाम होतील त्याविरुद्ध इशारा दिला गेला होता. मद्रास शहराची मागणी सोडून देण्याच्या अटीवर या समितीने आंध्र प्रदेशाचे राज्य निर्माण होण्यासाठीची मागणी मान्य करणारा विचार मांडला होता. पण इतर सर्व मागण्या फेटाळून लावल्या होत्या. भाषावर प्रांत रचनेचा प्रश्‍न यामुळे तीव्रच बनत गेला. आंध्र प्रदेशच्या मागणीसाठी स्वामी सीताराम या प्रसिद्ध गांधीवादी नेत्याने ३५ दिवसांचे आमरण उपोषण केले आणि विनोबा भावेंच्या आग्रहाखातर सोडले. पण त्या पाठोपाठ एक वर्षाने दुसरे गांधीवादी नेते पोट्टी श्रीरामुळू यांनी आमरण उपोषण सुरू केले. त्यांच्या ५८ दिवसांच्या उपोषणाच्या शेवटी १५ डिसेंबर १९५२ रोजी त्यांचा उपोषणातच मृत्यू झाला. यामुळे आंध्र प्रदेश मुलखात मोठ्या प्रमाणात अभूतपूर्व असे हिंसक आंदोलन";
function Search() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(data);
  };
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
    {search && 
          <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Document Found!!
          </h5>
          <p class="font-normal text-gray-700 ">
            A similar document found in the database. <br />
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              View Document
            </a>
          </p>
          <ul>
              <li>Date Uploaded: 12th October 2023</li>
              <li>By: John Doe</li>
              <li>Match Percentage: 93%</li>
          </ul>
  
        </a>
    }
    
    </div>
  );
}

export default Search;
