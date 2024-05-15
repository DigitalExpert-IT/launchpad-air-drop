import { Card, CardHeader, Heading, CardBody, Stack, Text, Button, CardFooter, HStack, Input } from "@chakra-ui/react"
import React from "react";
import {NotAllowedIcon, CheckCircleIcon} from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export const EmailForm = () => {
    const { t } = useTranslation()
    
    return (
        <Card backgroundColor={"black"} p={5} borderRadius={20}>
          <CardHeader>
            <Heading size='lg'>Verify Email</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text fontSize={"xs"}>Enter Your Email Address:</Text>
              <Input placeholder={"youremail@mail.com"} variant={"solid"} borderRadius={10} minW={"40vh"}/>
            </Stack>
          </CardBody>
          <CardFooter>
            <HStack>
              <Button alignSelf={"center"} backgroundColor={"#3C014A"} minW={"20vh"} minH={"5vh"}>Send Link</Button>
              <Button alignSelf={"center"} backgroundColor={"#9321DD"} minW={"20vh"} minH={"5vh"} isDisabled={true}>Next Step</Button>
            </HStack>
          </CardFooter>
        </Card>
    )
}