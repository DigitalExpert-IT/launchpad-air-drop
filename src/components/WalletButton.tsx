import { Box, Button, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";import {
  useAddress,
  useSetIsWalletModalOpen,
  ConnectWallet
} from "@thirdweb-dev/react";

export const WalletButton = () => {
  const { t } = useTranslation();
  const openModal = useSetIsWalletModalOpen();
  const address = useAddress();


  if(address) return <ConnectWallet />;
    return (
        <Button
        type="submit"
        onClick={() => openModal(true)}
        background={"#9321DD"}
        fontSize={"md"}
        borderRadius={"50px"}
        fontWeight={"400"}
      >
        Connect Wallet
      </Button>
    )
}