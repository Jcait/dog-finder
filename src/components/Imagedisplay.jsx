import { useState } from "react";

const ImageDisplay = ({ imgSrc }) => {
  return (
    <>
      <section>
        <img className="dog-display" src={imgSrc} />
      </section>
    </>
  );
};

export default ImageDisplay;
