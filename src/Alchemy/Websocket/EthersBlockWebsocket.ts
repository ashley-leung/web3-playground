import { AlchemySepoliaWebsocketProvider } from "../AlchemyProvider";

export const EthersBlockWebsocket = async () => {
  try {
    const sepoliaWebsocketProvider = AlchemySepoliaWebsocketProvider();

    sepoliaWebsocketProvider.on("block", (blockNumber) => {
      console.log(`New block received: ${blockNumber}`);
    });
  } catch (error) {
    console.error("Error connecting to WebSocket:", error);
  }
};
