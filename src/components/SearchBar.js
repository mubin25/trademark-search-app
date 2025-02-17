import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Searchbar.css";
import logo from "../assets/trademarkia-logo.jpg"; 

const SearchBar = ({ onSearch, loading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery?.trim?.()) {
      onSearch?.(searchQuery);
    }
  };

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="text-primary mt-2">Fetching trademarks...</p>
      </div>
    );
  }

  return (
    <div className="search-bar-container">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Trademarkia Logo" className="searchbar-logo" />
      </div>

      <div className="search-wrapper">
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search Trademark Here e.g. Mickey Mouse"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
