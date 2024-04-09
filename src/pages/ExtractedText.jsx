import { images } from "fontawesome";
import React, { useEffect } from "react";

export const ExtractedText = (texts, pdf) => {

  console.log(texts.texts);

  return (
    //with tailwind make two columns each row contains a rectangle image of line and corresponding text
    <div className="grid pt-8 gap-x-2 gap m-20">
      <p
        className="
          text-justify text-sm text-gray-800 border-2 border-gray-300 p-9 rounded-xl
          "
      >
        {texts.texts}
      </p>
    </div>
  );
};
