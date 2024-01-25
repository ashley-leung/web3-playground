import { AlchemyProvider } from "ethers";
import dotenv from "dotenv";

dotenv.config();

export const AlchemySepoliaProvider = () => {
  const network = "sepolia";
  return new AlchemyProvider(network, process.env.ALCHEMY_ETH_SEPOLIA_API_KEY);
};

export const AlchemyMainnetProvider = () => {
  const network = "mainnet";
  return new AlchemyProvider(network, process.env.ALCHEMY_ETH_MAINNET_API_KEY);
};
