import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import TrademarkList from "../components/TrademarkList";
import { fetchTrademarks } from "../api/trademarkService";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [trademarks, setTrademarks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    status: [],
    owners: [],
    lawFirms: [],
    attorneys: [],
    view: "list",
  });

  const extractUniqueValues = (key) => {
    return [...new Set(trademarks?.map?.((item) => item?._source?.[key]))]?.filter?.(Boolean);
  };

  const handleSearch = async (query) => {
    setSearchQuery?.(query);
    setLoading(true);

    const results = await fetchTrademarks?.(query, filters);  
    setTrademarks?.(results);
    setLoading(false);
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch?.(searchQuery);
    }
  }, [searchQuery, filters]);  

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} loading={loading} />

      {trademarks?.length > 0 && (
        <div className="row mt-4">
          <div className="col-md-8">
            <TrademarkList trademarks={trademarks} filters={filters} loading={loading} />
          </div>

          <div className="col-md-4">
            <Filters
              filters={filters}
              owners={extractUniqueValues("current_owner")}
              lawFirms={extractUniqueValues("law_firm")}
              attorneys={extractUniqueValues("attorney_name")}
              onFilterChange={setFilters}
            />
          </div>
        </div>
      )}

      {!loading && searchQuery && trademarks?.length === 0 && (
        <p className="text-center text-danger justify-center">No results found. Try a different search.</p>
      )}
    </div>
  );
};

export default Home;
