import React, { useState } from "react";
import './style.css'
const ITEMS_PER_PAGE = 9; // Number of items per page

const Grid = ({ photos }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = photos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid">
        {currentItems.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:5000/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Grid;
