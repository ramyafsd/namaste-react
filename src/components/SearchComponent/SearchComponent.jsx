import React from "react";
import "./search.css";
const SearchComponent = (props) => {
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    props.handleSearch(searchValue);
  };
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="search here..."
        className="search-input"
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchComponent;
