import React from "react";
export function FeaturedImageGallery() {
  const data = [
    //"C:/NIC AI Training/PDF Pipeline/output/page10_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page0_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page1_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page2_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page3_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page4_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page5_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page6_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page7_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page8_bounding_boxes.png"
    // "C:/NIC AI Training/PDF Pipeline/output/page9_bounding_boxes.png"
    {
      imgelink: "/page0_bounding_boxes.png",
    },
    {
      imgelink: "/page1_bounding_boxes.png",
    },
    {
      imgelink: "/page2_bounding_boxes.png",
    },
    {
      imgelink: "/page3_bounding_boxes.png",
    },
    {
      imgelink: "/page4_bounding_boxes.png",
    },
    {
      imgelink: "/page5_bounding_boxes.png",
    },
    {
      imgelink: "/page6_bounding_boxes.png",
    },
    {
      imgelink: "/page7_bounding_boxes.png",
    },
    {
      imgelink: "/page8_bounding_boxes.png",
    },
    {
      imgelink: "/page9_bounding_boxes.png",
    },
    {
      imgelink: "/page10_bounding_boxes.png",
    },
  ];

  const [active, setActive] = React.useState(data[0].imgelink);

  return (
    <div className="grid grid-flow-col gap-8 pt-8 w-[100%] overflow-hidden">
      <div>
        <img
          className="h-full m-auto rounded-lg object-cover border border-gray-800/30 object-center md:h-[560px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {data.map(({ imgelink }, index) => (
          <div key={index} className="m-auto">
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="max-w-full cursor-pointer rounded border border-gray-800/30 object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
