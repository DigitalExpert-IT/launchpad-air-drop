import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import { Box, Stack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import About from "./components/About";
import Launchpad from "./components/Launcpad";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Stack fontSize={30} gap={10}>
        <Header />
        <Launchpad />
        <About />
      </Stack>
      <Footer />
    </Layout>
  );
}
