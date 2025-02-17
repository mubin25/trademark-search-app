import React, { useState } from "react";
import DisplayToggle from "./DisplayToggle"; 

const Filters = ({ filters, owners, lawFirms, attorneys, onFilterChange }) => {
  const [searchOwner, setSearchOwner] = useState("");
  const [searchFirm, setSearchFirm] = useState("");
  const [searchAttorney, setSearchAttorney] = useState("");

  const handleChange = (type, value) => {
    let updatedValue = value;

    if (["owners", "lawFirms", "attorneys"].includes(type)) {
      updatedValue = value.map(entry => entry.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().trim());
    }

    const updatedFilters = { ...filters, [type]: updatedValue };
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-container p-3 shadow-sm rounded bg-white">
      {/* 🔹 Status Filter */}
      <h5>Status</h5>
      <div className="d-flex flex-wrap gap-2">
        {["registered", "pending", "abandoned", "others"].map(status => (
          <button
            key={status}
            className={`btn btn-outline-primary ${filters?.status.includes(status) ? "active" : ""}`}
            onClick={() => handleChange("status", filters?.status.includes(status) 
              ? filters.status.filter(s => s !== status) 
              : [...filters.status, status])}
          >
            {status}
          </button>
        ))}
      </div>

      <h5 className="mt-3">Owners</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search Owners"
        value={searchOwner}
        onChange={(e) => setSearchOwner(e.target.value)}
      />
      {owners?.filter(owner => owner.toLowerCase().includes(searchOwner.toLowerCase()))
        .map(owner => (
          <div key={owner} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters?.owners.includes(owner)}
              onChange={() => handleChange("owners", filters?.owners.includes(owner) 
                ? filters.owners.filter(o => o !== owner) 
                : [...filters.owners, owner])}
            />
            <label className="form-check-label">{owner}</label>
          </div>
        ))
      }

      <h5 className="mt-3">Law Firms</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search Law Firms"
        value={searchFirm}
        onChange={(e) => setSearchFirm(e.target.value)}
      />
      {lawFirms?.filter(firm => firm.toLowerCase().includes(searchFirm.toLowerCase()))
        .map(firm => (
          <div key={firm} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters?.lawFirms.includes(firm)}
              onChange={() => handleChange("lawFirms", filters?.lawFirms.includes(firm) 
                ? filters.lawFirms.filter(f => f !== firm) 
                : [...filters.lawFirms, firm])}
            />
            <label className="form-check-label">{firm}</label>
          </div>
        ))
      }


      <h5 className="mt-3">Attorneys</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search Attorneys"
        value={searchAttorney}
        onChange={(e) => setSearchAttorney(e.target.value)}
      />
      {attorneys?.filter(attorney => attorney.toLowerCase().includes(searchAttorney.toLowerCase()))
        .map(attorney => (
          <div key={attorney} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters?.attorneys.includes(attorney)}
              onChange={() => handleChange("attorneys", filters?.attorneys.includes(attorney) 
                ? filters.attorneys.filter(a => a !== attorney) 
                : [...filters.attorneys, attorney])}
            />
            <label className="form-check-label">{attorney}</label>
          </div>
        ))
      }

    
      <DisplayToggle filters={filters} onFilterChange={onFilterChange} />
    </div>
  );
};

export default Filters;
