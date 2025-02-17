import React from "react";

const StatusFilter = ({ filters = {}, onFilterChange }) => {
  const statuses = ["registered", "pending", "abandoned", "others"];

  // Ensure filters.status is initialized
  const currentStatus = filters.status || [];

  const handleStatusChange = (status) => {
    const newStatus = currentStatus.includes(status)
      ? currentStatus.filter((s) => s !== status)
      : [...currentStatus, status];

    console.log("Updated Status Filter:", newStatus); 

    // Ensure other filters remain unchanged
    onFilterChange({ ...filters, status: newStatus });
  };

  return (
    <div className="filter-box">
      <h5>Status</h5>
      {statuses.map((status) => (
        <div key={status} className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={currentStatus.includes(status)}
            onChange={() => handleStatusChange(status)}
          />
          <label className="form-check-label text-capitalize">
            {status}
          </label>
        </div>
      ))}
    </div>
  );
};

export default StatusFilter;
