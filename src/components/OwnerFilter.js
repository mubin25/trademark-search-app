import React, { useState } from "react";

const OwnerFilter = ({ filters, onFilterChange, owners }) => {
  const [search, setSearch] = useState("");

  const handleOwnerChange = (owner) => {
    const newOwners = filters?.owners?.includes(owner)
      ? filters?.owners?.filter((o) => o !== owner) 
      : [...filters?.owners, owner]; 

    console.log("👤 Updated Owner Filter:", newOwners); 
    onFilterChange({ owners: newOwners }); 
  };

  return (
    <div className="filter-box">
      <h5>Owners</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search Owners"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="owner-list">
        {owners?.length === 0 ? (
          <p className="text-muted">No Owners Found</p> 
        ) : (
          owners?.filter((owner) => owner.toLowerCase().includes(search.toLowerCase()))
            .map((owner) => (
              <div key={owner} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={filters.owners.includes(owner)}
                  onChange={() => handleOwnerChange(owner)}
                />
                <label className="form-check-label">{owner}</label>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default OwnerFilter;
