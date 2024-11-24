const ImageDisplay = ({ imgSrc, searchInput }) => {
  return (
    <>
      <section className="image-display">
        <img
          className="dog-display"
          src={imgSrc}
          alt={`A picture of a ${searchInput}`}
        />
      </section>
    </>
  );
};

export default ImageDisplay;
