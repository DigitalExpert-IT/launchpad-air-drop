import "@/styles/globals.css";
import theme from "@/theme";
import { Provider } from 'react-redux';
import { Box, Button, ChakraProvider, Text } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../locales"
import store from "@/redux/store";
import { ThirdwebProvider as GlobalProvider, coinbaseWallet, localWallet, metamaskWallet, safeWallet, trustWallet, useChain, useSwitchChain, useWallet, walletConnect } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "thirdweb/react";
import { getActiveChain } from "../lib/chain";
import { t } from "i18next";

const targetChain = getActiveChain();


const ChainBanner = () => {
  const chain = useChain();
  const switchChain = useSwitchChain();
  const wallet = useWallet();
  const isConnectThroughIncorrectChain =
    wallet && chain && chain.chainId && chain.chainId !== targetChain?.chainId;

    const handleSwitchChain = () => {
      try {
        switchChain(targetChain?.chainId);
      } catch (error) {}
    };


  return (
    <>
    {isConnectThroughIncorrectChain ? (
      <Box
        bg="gray.800"
        w="full"
        py="4"
        textAlign="center"
        position="fixed"
        bottom="0"
        left="0"
        zIndex={99999}
      >
        <Text textAlign="center">
          {t("common.banner.invalidChainMessage")}
        </Text>{" "}
        <Button onClick={handleSwitchChain} mt="2">
          {t("common.banner.switchChain", { name: targetChain?.name })}
        </Button>
      </Box>
    ) : null}
    </>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB || "0";


  return (
    <GlobalProvider supportedChains={[targetChain]}
      activeChain={targetChain}
      clientId={CLIENT_ID}>
    <ThirdwebProvider>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ChainBanner/>
      </Provider>
    </ChakraProvider>
    </ThirdwebProvider>
    </GlobalProvider>
  );
};

export default App;
