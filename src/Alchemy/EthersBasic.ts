import { formatEther } from "ethers";
import {
  AlchemyMainnetAPIProvider,
  AlchemySepoliaAPIProvider,
} from "./AlchemyProvider";

const sepoliaAPIProvider = AlchemySepoliaAPIProvider();
const mainnetAPIProvider = AlchemyMainnetAPIProvider();

export const GetBalance = async (address: string) => {
  const output = await sepoliaAPIProvider.getBalance(address);

  console.log(formatEther(output));
};

export const GetBlockNumber = async () => {
  const output = await sepoliaAPIProvider.getBlockNumber();

  console.log(output);
};
