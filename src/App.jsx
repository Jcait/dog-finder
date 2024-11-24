import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageDisplay from "./components/Imagedisplay";
import ImageGet from "./components/ImageGet";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dogPic, setDogPic] = useState("");
  const [dogAltText, setDogAltText] = useState("");
  const [isError, setIsError] = useState(false);

  // This takes the message received from image api and sets it as the state used for dog pic
  const apiFormat = async (api) => {
    try {
      const image = await fetch(api).then((response) => response.json());
      if (image.code == "404") throw new Error("Request failed");
      setIsError(false);
      setDogAltText(`This is a picture of a ${searchInput}`);
      setDogPic(image);
    } catch (error) {
      setDogPic("");
      setIsError(true);
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
        <div className="container">
          <h1 className="title">Find a Dog</h1>
          <section className="searchbar" role="Search">
            <Searchbar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              apiFormat={apiFormat}
              handleClick={handleClick}
            />
            <ImageGet handleClick={handleClick} />
          </section>
        </div>

        {isError ? (
          <ErrorPage />
        ) : !dogPic ? null : (
          <ImageDisplay
            imgSrc={dogPic.message}
            searchInput={searchInput}
            dogAltText={dogAltText}
            role="display dog picture"
          />
        )}
      </main>
    </>
  );
}

export default App;
