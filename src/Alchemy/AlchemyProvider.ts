import { AlchemyProvider, WebSocketProvider } from "ethers";
import dotenv from "dotenv";
import { assertNotNull } from "../Utils/Utils";

dotenv.config();

export const AlchemyMainnetAPIProvider = () => {
  const network = "mainnet";
  return new AlchemyProvider(network, process.env.ALCHEMY_ETH_MAINNET_API_KEY);
};

export const AlchemySepoliaAPIProvider = () => {
  const network = "sepolia";
  return new AlchemyProvider(network, process.env.ALCHEMY_ETH_SEPOLIA_API_KEY);
};

export const AlchemyMainnetWebsocketProvider = () => {
  return new WebSocketProvider(
    assertNotNull(process.env.ALCHEMY_ETH_MAINNET_WEBSOCKET)
  );
};

export const AlchemySepoliaWebsocketProvider = () => {
  return new WebSocketProvider(
    assertNotNull(process.env.ALCHEMY_ETH_SEPOLIA_WEBSOCKET)
  );
};
