import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Searchbar() {
  // The auto complete components requires an Array of Obejcts, when clearing the state use an empty array
  const testItems = [{ name: "Bark" }, { name: "Meow" }, { name: "Quack" }];
  const [suggestions, setSuggestions] = useState([]);

  const fetchDogSuggests = async () => {
    try {
      const breeds = await fetch("https://dog.ceo/api/breeds/list/all").then(
        (response) => response.json()
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearch = () => {
    fetchDogSuggests();
  };

  return (
    <>
      <div className="search-container">
        <h4>Find a dog</h4>
        <ReactSearchAutocomplete items={testItems} className="searchbar" />
      </div>
    </>
  );
}

export default Searchbar;
