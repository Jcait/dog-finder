import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Searchbar({ searchInput, setSearchInput, handleClick }) {
  // The auto complete components requires an Array of Obejcts, when clearing the state use an empty array
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchDogSuggests = async () => {
      try {
        const breeds = await fetch("https://dog.ceo/api/breeds/list/all").then(
          (response) => response.json()
        );
        // Changes the JSON response to an array of objects
        const autocomplete = Object.keys(breeds.message).map((breed, i) =>
          Object.assign({
            id: i,
            key: i,
            name: breed.replace(/^./, breed[0].toUpperCase()),
          })
        );
        setSuggestions(autocomplete);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchDogSuggests();
  }, []);

  //   This fires on every input, like onChange, string tracks the searchbars value
  //   will be used to update state to fetch image
  const handleSearch = (string) => {
    setSearchInput(string.toLowerCase());
  };
  // Updates the state with hover, letting handle click catch up
  const onHover = (string) => {
    console.log(string.name);
    setSearchInput(string.name.toLowerCase());
  };

  const handleSelect = () => {
    handleClick(searchInput);
  };
  return (
    <>
      <div className="search-container">
        <h4>Search by dog breed</h4>
        <ReactSearchAutocomplete
          items={suggestions}
          onSearch={handleSearch}
          onSelect={handleSelect}
          onHover={onHover}
          showNoResults={false}
          placeholder="Great Dane, Dalmatian, Chihuahua"
          fuseOptions={{ minMatchCharLength: 2 }}
          className="dog-search"
        />
      </div>
    </>
  );
}

export default Searchbar;
