const ImageGet = ({ searchInput, setApi }) => {
  const handleClick = () => {
    setApi(`https://dog.ceo/api/breeds/${searchInput}/images/random`);
  };

  return <button onClick={handleClick}> click me</button>;
};

export default ImageGet;
