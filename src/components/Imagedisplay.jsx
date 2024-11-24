const ImageDisplay = ({ imgSrc }) => {
  return (
    <>
      <section className="image-display">
        <img className="dog-display" src={imgSrc} />
      </section>
    </>
  );
};

export default ImageDisplay;
