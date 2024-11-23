import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageDisplay from "./components/Imagedisplay";
import ImageGet from "./components/ImageGet";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <main style={{ backgroundColor: "grey", width: "100%" }}>
        {/* First section is for the search widget */}
        <h1>DogFinder</h1>
        <section className="placeholder">
          <Searchbar setSearchInput={setSearchInput} />
          <ImageGet />
        </section>
        {/* Second Section for Image display */}
        <ImageDisplay />
      </main>
    </>
  );
}

export default App;
