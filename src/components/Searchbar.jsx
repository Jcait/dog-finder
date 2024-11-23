import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Searchbar() {
  // The auto complete components requires an Array of Obejcts, when clearing the state use an empty array
  const [suggestions, setSuggestions] = useState([]);

  const fetchDogSuggests = async () => {
    try {
      const breeds = await fetch("https://dog.ceo/api/breeds/list/all").then(
        (response) => response.json()
      );
      const autocomplete = Object.keys(breeds.message).map((breed) =>
        Object.assign({ name: breed })
      );
      setSuggestions(autocomplete);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   This fires on every input, like onChange
  const handleSearch = () => {
    fetchDogSuggests();
  };

  return (
    <>
      <div className="search-container">
        <h4>Find a dog</h4>
        <ReactSearchAutocomplete
          items={suggestions}
          onSearch={handleSearch}
          className="searchbar"
        />
      </div>
    </>
  );
}

export default Searchbar;
