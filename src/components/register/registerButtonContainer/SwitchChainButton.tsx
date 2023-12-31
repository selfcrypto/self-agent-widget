import { Button } from "@chakra-ui/react";
import { useSwitchNetwork } from "wagmi";

//---------------Local Imports--------------------

const CHAIN_ID = Number(process.env.NEXT_PUBLIC_NETWORK_CHAIN_ID);

const SwitchChainButton = () => {
  const { switchNetwork, isLoading } = useSwitchNetwork();
  return (
    <Button
      w="full"
      py={{ base: 6, md: 8 }}
      fontSize={{ base: "sm", md: "lg" }}
      variant="primary"
      isDisabled={!switchNetwork || isLoading}
      isLoading={isLoading}
      onClick={() => {
        if (switchNetwork) switchNetwork(CHAIN_ID);
      }}
    >
      Switch Chain
    </Button>
  );
};

export default SwitchChainButton;
