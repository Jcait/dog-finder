import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageDisplay from "./components/Imagedisplay";
import ImageGet from "./components/ImageGet";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dogPic, setDogPic] = useState("");
  const [isError, setError] = useState(true);

  // This takes the message received from image api and sets it as the state used for dog pic
  const apiFormat = async (api) => {
    try {
      const image = await fetch(api).then((response) => response.json());
      setDogPic(image);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const handleClick = ({ string = searchInput }) => {
    string.length == 0
      ? null
      : apiFormat(`https://dog.ceo/api/breed/${string}/images/random`);
  };

  return (
    <>
      <main>
        {/* First section is for the search widget */}
        <h1>Find a Dog</h1>
        <section className="searchbar" role="Search">
          <Searchbar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            apiFormat={apiFormat}
            handleClick={handleClick}
          />
          <ImageGet handleClick={handleClick} />
        </section>
        {isError ? null : <ImageDisplay imgSrc={dogPic.message} />}
        <button onClick={() => console.log(searchInput)}></button>
      </main>
    </>
  );
}

export default App;
