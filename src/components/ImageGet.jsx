const ImageGet = ({ searchInput, setApi, apiFormat }) => {
  const handleClick = () => {
    setApi(apiFormat(`https://dog.ceo/api/breed/${searchInput}/images/random`));
  };

  return <button onClick={handleClick}> click me</button>;
};

export default ImageGet;
