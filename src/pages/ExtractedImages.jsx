import { image } from "fontawesome";
import React from "react";
export function FeaturedImageGallery( {images}) {
  console.log(images);

const path = 'http://127.0.0.1:8000/'

  const data = images?.map((image, index) => ({
    imgelink: path + image,
  }));

  // const [active, setActive] = React.useState(data[0]?.imgelink);

  return (
    <div className="grid grid-flow-col gap-8 pt-8 w-[100%] overflow-hidden m-8">
      
      <div className="grid grid-cols-2 gap-2">
        {/* if 1st then skip */}
        { data.map(({ imgelink }, index) => (
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
