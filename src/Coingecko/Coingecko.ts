import axios from "axios";

export const GetCoinPrices = async (symbol: string): Promise<any> => {
  const BASE_URL = "https://api.coingecko.com/api/v3";

  try {
    const response = await axios.get(`${BASE_URL}/simple/price`, {
      params: {
        ids: symbol,
        vs_currencies: "usd",
      },
    });
    const result = response.data;
    console.log(result);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data from CoinGecko API:", error);
    throw error;
  }
};
