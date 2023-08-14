import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <nav>
      <div className="nav-itom">
      <div className="nav__logo">Photo Gallery App</div>
      <div className="nav__search">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
