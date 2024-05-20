import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";import {
  useAddress,
  useSetIsWalletModalOpen,
  ConnectWallet
} from "@thirdweb-dev/react";

const WalletButton = () => {
  const { t } = useTranslation();
  const openModal = useSetIsWalletModalOpen();
  const address = useAddress();


  if(address) return <ConnectWallet />;

  return (
    <Button
      as={"button"}
      background={"#9321DD"}
      fontSize={"md"}
      borderRadius={"50px"}
      fontWeight={"400"}
      onClick={() => openModal(true)}
    >
        {t("common.connectWallet")}
    </Button>
  );
};

export default WalletButton;
