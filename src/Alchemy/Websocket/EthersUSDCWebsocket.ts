import { Contract } from "ethers";
import { AlchemyMainnetWebsocketProvider } from "../AlchemyProvider";

export const EthersUSDCWebsocket = async () => {
  const usdcContractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
  const usdcContractAbi = [
    // From https://gist.github.com/veox/8800debbf56e24718f9f483e1e40c35c
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
  ];

  try {
    const mainnetWebsocketProvider = AlchemyMainnetWebsocketProvider();
    let usdcContract = new Contract(
      usdcContractAddress,
      usdcContractAbi,
      mainnetWebsocketProvider
    );

    usdcContract.on("Transfer", (transferEvent) => {
      console.log(`New transfer for USDC contract: ${transferEvent}`);
    });
  } catch (error) {
    console.error("Error connecting to WebSocket:", error);
  }
};
