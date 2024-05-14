import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useAddress, useSetIsWalletModalOpen } from "@thirdweb-dev/react";
import { useTranslation } from "react-i18next";

const CreditAssets = () => {
  const { t } = useTranslation();
  const openModal= useSetIsWalletModalOpen();
  const address = useAddress();

  return (
    <Box
      background={"black"}
      borderRadius={"15px"}
      p={5}
      boxShadow={"2px 2px 25.8px 0px #9321dd4a"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={{ base: "90%", sm: "400px" }}
      >
        <Text fontSize={"18px"}>{t("creditAssets.title")}</Text>
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <Image
            src="/assets/usdt-with-bg.png"
            w={"29px"}
            h={"29px"}
            alt="usdt"
          />
          <Text fontSize={"20px"}>0.00</Text>
        </Box>
      </Box>
      <Flex
        gap={10}
        backgroundColor={"#3C014A"}
        w={"fit-content"}
        px={5}
        py={3}
        mt={3}
        borderRadius={"12"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src="/assets/usdt-with-bg.png"
          w={"43px"}
          h={"43px"}
          alt="usdt"
        />
        <Text fontSize={"xl"}>USDT</Text>
      </Flex>
      <Button bgColor={"#9321DD"} w={"100%"} borderRadius={"10px"} mt={8} onClick={() => openModal(true)}>
        {address ? address : t("creditAssets.button")}
      </Button>
    </Box>
  );
};

export default CreditAssets;
