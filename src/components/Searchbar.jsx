import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Searchbar() {
  return (
    <>
      <div className="search-container">
        <h4>Find a dog</h4>
        <ReactSearchAutocomplete className="searchbar" />
      </div>
    </>
  );
}

export default Searchbar;
