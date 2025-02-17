import React from "react";
import TrademarkCard from "./TrademarkCard";

const TrademarkList = ({ trademarks, filters, loading }) => {
  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="text-primary mt-2">Fetching trademarks...</p>
      </div>
    );
  }

  if (trademarks?.length === 0) {
    return <p className="text-center text-danger">No Results Found</p>;
  }

  return (
    <div className="container mt-4">
      {filters?.view === "grid" ? (
        /** ✅ GRID VIEW */
        <div className="row">
          {trademarks?.map?.((trademark) => (
            <div className="col-md-4 mb-3" key={trademark?._id}>
              <TrademarkCard data={trademark?._source} />
            </div>
          ))}
        </div>
      ) : (
        /** ✅ LIST VIEW */
        <div className="container mt-4">
        <table className="table table-hover shadow-sm">
          <thead className="bg-light">
            <tr>
              <th>Mark</th>
              <th>Details</th>
              <th>Status</th>
              <th>Class/Description</th>
            </tr>
          </thead>
          <tbody>
            {trademarks?.map?.((trademark) => (
              <TrademarkCard key={trademark?._id} data={trademark?._source} />
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
};

export default TrademarkList;
