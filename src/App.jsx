import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageDisplay from "./components/Imagedisplay";
import ImageGet from "./components/ImageGet";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dogPic, setDogPic] = useState("");

  // This takes the message received from image api and sets it as the state used for dog pic
  const apiFormat = async (api) => {
    try {
      const image = await fetch(api).then((response) => response.json());
      setDogPic(image);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = ({ string = searchInput }) => {
    apiFormat(`https://dog.ceo/api/breed/${string}/images/random`);
  };

  return (
    <>
      <main>
        {/* First section is for the search widget */}
        <h1>DogFinder</h1>
        <section className="placeholder">
          <Searchbar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            apiFormat={apiFormat}
            handleClick={handleClick}
          />
          <ImageGet handleClick={handleClick} />
        </section>
        {/* Second Section for Image display */}
        <ImageDisplay imgSrc={dogPic.message} />
        <button onClick={() => console.log(searchInput)}></button>
      </main>
    </>
  );
}

export default App;
