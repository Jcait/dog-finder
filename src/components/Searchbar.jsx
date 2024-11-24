import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Searchbar({ searchInput, setSearchInput, handleClick }) {
  // The auto complete components requires an Array of Obejcts, when clearing the state use an empty array
  const [suggestions, setSuggestions] = useState([]);
  const [searched, setSearched] = useState(false);

  // Grabs the API once Searchbar loads and turns it into an array of suggestions for the
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
            name:
              breed == "dane"
                ? "Great Dane"
                : breed == "germanshepherd"
                ? "German Shepherd"
                : breed.replace(/^./, breed[0].toUpperCase()),
          })
        );
        setSuggestions(autocomplete);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchDogSuggests();
  }, []);

  // THis ensures the input is set first in handleSelect before fetching the API
  useEffect(() => {
    if (searched) {
      handleClick(searchInput);
      setSearched(false);
    }
  }, [searched, searchInput, handleClick]);

  //   This fires on every input, like onChange, string tracks the searchbars value
  // Unsure if German Shepherd and Great Dane count as sub breeds, Since Great Dane is in the placeholder, I'm making a quick fix for it.
  const handleSearch = (string) => {
    string == "German Shepherd"
      ? setSearchInput("germanshepherd")
      : string == "Great Dane"
      ? setSearchInput("dane")
      : setSearchInput(string.toLowerCase());
  };

  // triggers when an item in the dropdown is selected
  const handleSelect = (string) => {
    string.name == "German Shepherd"
      ? setSearchInput("germanshepherd")
      : string.name == "Great Dane"
      ? setSearchInput("dane")
      : setSearchInput(string.name.toLowerCase());
    setSearched(true);
  };

  return (
    <>
      <div className="search-container">
        <h4>Search by dog breed</h4>
        <ReactSearchAutocomplete
          items={suggestions}
          onSearch={handleSearch}
          onSelect={handleSelect}
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
