import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  useAddress,
  useSetIsWalletModalOpen,
  useConnect,
  ConnectWallet,
} from "@thirdweb-dev/react";
import {ConnectButton} from "thirdweb/react"
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";

const wallets = [
  createWallet("io.metamask"),
  createWallet("pro.tokenpocket"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];


const WalletButton = () => {
  const { t } = useTranslation();
  const client = process.env.NEXT_PUBLIC_THIRDWEB || "0";
  const clientId = createThirdwebClient({clientId: client})
  const address = useAddress();


  if(address) return <ConnectWallet />;

  return (
    <ConnectButton client={clientId} wallets={wallets} connectButton={{
      style: {
        backgroundColor: "transparent",
        background: "#9321DD",
        fontSize: "md",
        borderRadius: "50px",
        fontWeight: "400",
        color: "white"
      }
    }}/>
  );
};

export default WalletButton;
