import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageDisplay from "./components/Imagedisplay";
import ImageGet from "./components/ImageGet";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [api, setApi] = useState();
  const [dogPic, setDogPic] = useState("");

  const apiFormat = async (api) => {
    try {
      const image = await fetch(api).then((response) => response.json());
      setDogPic(image);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main style={{ backgroundColor: "grey", width: "100%" }}>
        {/* First section is for the search widget */}
        <h1>DogFinder</h1>
        <section className="placeholder">
          <Searchbar setSearchInput={setSearchInput} apiFormat={apiFormat} />
          <ImageGet
            searchInput={searchInput}
            setApi={setApi}
            apiFormat={apiFormat}
          />
        </section>
        {/* Second Section for Image display */}
        <ImageDisplay imgSrc={dogPic.message} />
        <button onClick={() => console.log(api)}></button>
      </main>
    </>
  );
}

export default App;
