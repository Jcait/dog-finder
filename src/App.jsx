import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageDisplay from "./components/Imagedisplay";
import ImageGet from "./components/ImageGet";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [api, setApi] = useState("");

  return (
    <>
      <main style={{ backgroundColor: "grey", width: "100%" }}>
        {/* First section is for the search widget */}
        <h1>DogFinder</h1>
        <section className="placeholder">
          <Searchbar setSearchInput={setSearchInput} />
          <ImageGet searchInput={searchInput} />
        </section>
        {/* Second Section for Image display */}
        <ImageDisplay />
        <button onClick={() => console.log(searchInput)}></button>
      </main>
    </>
  );
}

export default App;
