import React from "react";

export const ExtractedText = () => {
    const data = [
        {
          imglink: "/lines/page_74_line_1.png",
          text: "महाकोशल, कर्नाटक, आंध्र, तामिळनाडू, केर्ळ यांचे प्रतिनिधित्व करीत होते. १३"
        },
        {
          imglink: "/lines/page_74_line_2.png",
          text: "डिसेंबर १९४८ रोजी या कमिशनचा रिपोर्ट सादर झाला. १,००० लेखी निवेदने या"
        },
        {
          imglink: "/lines/page_74_line_3.png",
          text: "कमिशनकडे आली होती आणि त्यांनी ७०० साक्षीदारांच्या मुलाखती घेतल्या होत्या."
        },
        {
          imglink: "/lines/page_74_line_4.png",
          text: "भाषावर प्रांत रचनेच्या बाजूने असणारी मंडळी या कमिशनच्या रिपोर्टमुळे"
        },
        {
          imglink: "/lines/page_74_line_5.png",
          text: "मोठ्या प्रमाणात खवळली. कारण, भाषेच्या पायावर किंवा प्रामुख्याने भाषेचा विचार"
        },
        {
          imglink: "/lines/page_74_line_6.png",
          text: "करून प्रांत रचना करणे हे देशाच्या व्यापक हितात बसणारे नाही आणि त्यामुळे त्या"
        },
        {
          imglink: "/lines/page_74_line_7.png",
          text: "आधारावर काही कार्यवाही करू नये असा अहवाल या कमिशनने दिला होता. या"
        },
        {
          imglink: "/lines/page_74_line_8.png",
          text: "अहवालामुळे काँग्रेस पक्षात जो असंतोष तयार झाला त्यामुळे जयपूरला झालेल्या"
        },
        {
          imglink: "/lines/page_74_line_9.png",
          text: "अधिवेशनात भाषावर प्रांत रचनेच्या मागणीचा फेरविचार करण्यासाठीची एक उप-"
        },
        {
          imglink: "/lines/page_74_line_10.png",
          text: "समिती नेमण्यात आली. यात पंडित जवाहरलाल नेहरू, वल्लभभाई पटेल आणि"
        },
        {
          imglink: "/lines/page_74_line_11.png",
          text: "काँग्रेसचे तत्कालीन अध्यक्ष पट्टाभी सीतारामय्या अजा तीन वजनदार व्यक्तींचा"
        },
        {
          imglink: "/lines/page_74_line_12.png",
          text: "समावेश होता. या उप-समितीचा रिपोर्ट ६ एप्रिल १९४९ रोजी प्रसारित करण्यात"
        },
        {
          imglink: "/lines/page_74_line_13.png",
          text: "आला. या अहवालात भाषावर प्रांत रचनेचा प्रयत्न केल्यास जे दूरगामी परिणाम"
        },
        {
          imglink: "/lines/page_74_line_14.png",
          text: "होतील त्याविरुद्ध इशारा दिला गेला होता. मद्रास शहराची मागणी सोडून देण्याच्या"
        },
        {
          imglink: "/lines/page_74_line_15.png",
          text: "अटीवर या समितीने आंध्र प्रदेशाचे राज्य निर्माण होण्यासाठीची मागणी मान्य"
        },
    ];
      

  const [active, setActive] = React.useState(data[0].imgelink);
  return (
    //with tailwind make two columns each row contains a rectangle image of line and corresponding text
    <div className="grid grid-cols-5 pt-8 gap-x-2 gap">
      {data.map(( index) => (
        <>
          <div className="col-span-3">
            <img
              className="object-contain w-full border border-gray-600/30"
              src={index.imglink}
              alt=""
            />
          </div>
          <div className="col-span-2">
            <p>"{index.text}"</p>
          </div>
        </>
      ))}
    </div>
  );
};
