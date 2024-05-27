import "@/styles/globals.css";
import theme from "@/theme";
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../locales"
import store from "@/redux/store";
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, safeWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import { getActiveChain } from "../lib/chain";

const App = ({ Component, pageProps }: AppProps) => {
  const targetChain = getActiveChain();
  const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB || "0";
  return (
    <ThirdwebProvider
      supportedChains={[targetChain]}
      supportedWallets={[
        metamaskWallet(),
        trustWallet(),
        walletConnect(),
        coinbaseWallet(),
        safeWallet(),
        localWallet(),
      ]}
      activeChain={targetChain}
      clientId={CLIENT_ID}>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
    </ThirdwebProvider>
  );
};

export default App;
