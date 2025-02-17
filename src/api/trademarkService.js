import axios from "axios";

const API_URL = "https://vit-tm-task.api.trademarkia.app/api/v3/us";

export const fetchTrademarks = async (query, filters) => {
    try {
      const payload = {
        input_query: query,
        input_query_type: "",
        sort_by: "default",
        status: filters?.status || [],
        exact_match: false,
        date_query: false,
        owners: filters?.owners.length ? filters.owners : [],
        attorneys: filters?.attorneys || [],
        law_firms: filters?.lawFirms || [],
        mark_description_description: [],
        classes: [],
        page: 1,
        rows: 10,
        sort_order: "desc",
        states: [],
      };
  
      console.log("🚀 API Request Payload:", payload); 
  
      const response = await axios.post(API_URL, payload);
      return response.data?.body?.hits?.hits || [];
    } catch (error) {
      console.error("❌ Error fetching trademarks:", error);
      return [];
    }
  };
  