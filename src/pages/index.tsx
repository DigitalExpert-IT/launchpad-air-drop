import Layout from "@/components/layout";
import { Stack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import About from "./components/About";
import Launchpad from "./components/Launchpad";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";

export default function Home() {
  return (
    <Layout>
      <Stack fontSize={30} gap={0}>
        <Header />
        <OrderForm />
        <Launchpad />
        <About />
      </Stack>
      <Footer />
    </Layout>
  );
}
