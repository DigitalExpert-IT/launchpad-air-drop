import { Badge, Box, Button, Center, FormLabel, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import CreditAssets from "./CreditAssets";
import { useTranslation } from "react-i18next";
import register from "../register";
import { FormInput } from "../../lib/FormInput";
import { ButtonConnectWrapper } from "../../lib/ButtonConnectWrapper";
import { useForm } from "react-hook-form";
import { useAddress } from "@thirdweb-dev/react";
import { shortenAddress } from "../../lib/address";

type FormType = {
  referrer: string;
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const address = useAddress() ?? "0x0000000000000000000000000000000000000000";
  const { control, setValue, handleSubmit } = useForm<FormType>();

  return (
      <Stack spacing="2" as="form">
      <Box pos={"absolute"} top={{ base: "6", lg: "14" }} left={"-2"}>
        <Badge
          bg={"#9321DD"}
          minW={"48"}
          py={"2"}
          px={"6"}
          fontSize={"xl"}
          fontWeight={"semibold"}
          textAlign={"right"}
          roundedRight={"50px"}
          roundedLeft={"0"}
        >
          {shortenAddress(address)}
        </Badge>
      </Box>
      <FormLabel
        mt={20}
        pb={8}
        textAlign={"center"}
        fontSize={{ base: "xl", sm: "3xl" }}
        color={"black"}
      >
        {t("form.label.referrer")}*
      </FormLabel>
      <FormInput
        control={control}
        name="referrer"
        px={"0"}
        fontSize={{ base: "sm", sm: "medium" }}
        color={"black"}
        placeholder={t("form.placeholder.referrer") ?? ""}
        helpertext={t("form.helperText.referrer")}
        _placeholder={{ color: "black", opacity: "0.5" }}
        rounded={"none"}
        borderBottom={"1px"}
        bg={"white"}
        _hover={{
          bg: "white",
          borderBottomColor: "black",
          borderBottom: "2px",
        }}
        _focus={{
          border: "none",
          borderBottom: "2px",
          bg: "white",
        }}
      />
      <Text fontSize={{ base: "sm", sm: "md" }} color={"black"}>
        {t("form.helperText.referrer")}
      </Text>
      <Center pt={"10"}>
        <ButtonConnectWrapper type="submit" border={"1px"} px={"16"}>
          <Button
            type="submit"
            border={"1px"}
            px={"16"}
            color={"black"}
            borderRadius={25}
            borderColor={"#682EFD"}
          >
            {t("common.register")}
          </Button>
        </ButtonConnectWrapper>
      </Center>
    </Stack>
  );
};

export default RegisterForm;