import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Box fontSize={30}>Launchpad air drop</Box>
    </Layout>
  );
}
