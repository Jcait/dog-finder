const ImageDisplay = ({ imgSrc, searchInput, dogAltText }) => {
  return (
    <>
      <section className="image-display">
        <img className="dog-display" src={imgSrc} alt={dogAltText} />
      </section>
    </>
  );
};

export default ImageDisplay;
