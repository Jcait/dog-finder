import { useState } from "react";

const ImageDisplay = ({ imgSrc }) => {
  return (
    <>
      <section>
        <img src={imgSrc} />
      </section>
    </>
  );
};

export default ImageDisplay;
