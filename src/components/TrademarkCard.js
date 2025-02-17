import React from "react";

const TrademarkRow = ({ data }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Trademark"
            className="rounded me-2"
          />
          <div>
            <h6 className="mb-0">{data?.mark_identification}</h6>
            <small className="text-muted">{data?.current_owner}</small>
          </div>
        </div>
      </td>
      <td>
        <p className="mb-0">{data?.registration_number}</p>
        <small className="text-muted">
          {new Date(data?.filing_date * 1000)?.toDateString?.()}
        </small>
      </td>
      <td>
        <span
          className={`badge ${
            data?.status_type === "registered" ? "bg-success" : "bg-warning"
          }`}
        >
          {data?.status_type}
        </span>
        <br />
        <small className="text-muted">
          {new Date(data?.status_date * 1000)?.toDateString?.()}
        </small>
      </td>
      <td>
        <p className="mb-0">{data?.mark_description_description?.[0] ?? "N/A"}</p>
        <small className="text-muted">Class {data?.class_codes?.join?.(", ")}</small>
      </td>
    </tr>
  );
};

export default TrademarkRow;
