import { formatEther } from "ethers";
import {
  AlchemyMainnetProvider,
  AlchemySepoliaProvider,
} from "./AlchemyProvider";

const sepoliaProvider = AlchemySepoliaProvider();
const mainnetProvider = AlchemyMainnetProvider();

export const GetBalance = async (address: string) => {
  const output = await sepoliaProvider.getBalance(address);

  console.log(formatEther(output));
};

export const GetBlockNumber = async () => {
  const output = await sepoliaProvider.getBlockNumber();

  console.log(output);
};
