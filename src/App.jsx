import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <main style={{ backgroundColor: "grey", width: "100%" }}>
        {/* First section is for the search widget */}
        <h1>DogFinder</h1>
        <section className="placeholder">
          <header>Label text</header>
          <button>click me</button>
        </section>
        {/* Second Section for Image display */}
        <section className="placeholder">
          <header>DogBreed Placeholder</header>
          <div
            style={{
              width: "100%",
              backgroundColor: "lightblue",
              height: "560px",
            }}
          >
            Image Card
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
