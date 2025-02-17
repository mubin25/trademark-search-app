import React from "react";

const DisplayToggle = ({ filters, onFilterChange }) => {
  return (
    <div className="mt-3">
      <h5>Display View</h5>
      <div className="btn-group" role="group">
        <button
          className={`btn btn-outline-secondary ${filters?.view === "grid" ? "active" : ""}`}
          onClick={() => onFilterChange({ ...filters, view: "grid" })}
          aria-pressed={filters?.view === "grid"}
        >
          Grid View
        </button>
        <button
          className={`btn btn-outline-secondary ${filters?.view === "list" ? "active" : ""}`}
          onClick={() => onFilterChange({ ...filters, view: "list" })}
          aria-pressed={filters?.view === "list"}
        >
          List View
        </button>
      </div>
    </div>
  );
};

export default DisplayToggle;
