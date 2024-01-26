import { GetBlockNumber } from "./Alchemy/EthersBasic";
import { EthersBlockWebsocket } from "./Alchemy/Websocket/EthersBlockWebsocket";
import { EthersUSDCWebsocket } from "./Alchemy/Websocket/EthersUSDCWebsocket";
import { GetCoinPrices } from "./Coingecko/Coingecko";

GetBlockNumber();
GetCoinPrices("usd-coin"); // See https://api.coingecko.com/api/v3/coins/list
// EthersBlockWebsocket();
EthersUSDCWebsocket();
