import { Card, CardHeader, Heading, CardBody, Stack, Text, Button, CardFooter, HStack, Input } from "@chakra-ui/react"
import React, { useState } from "react";
import {NotAllowedIcon, CheckCircleIcon} from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export interface IFormComponent {
  handleNextStep: () => void
} 

export const EmailForm = ({handleNextStep}: IFormComponent) => {
    const { t } = useTranslation()
    const [email, setEmail] = useState('')
    const [error, setError] = useState(true)

    const validateEmail = (email: string) => {
      // Basic email regex pattern for validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    const handleOnChange = (e: any) => {
      const value = e.target.value
      setEmail(value)
      if(validateEmail(value)){
        setError(false)
      } else {
        setError(true)
      }
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      sessionStorage.setItem("email", email)
      handleNextStep()
    }

    
    return (
        <Card backgroundColor={"black"} p={5} borderRadius={20}>
          <CardHeader>
            <Heading size='lg'>Verify Email</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text fontSize={"xs"}>Enter Your Email Address:</Text>
              <Input placeholder={"youremail@mail.com"} variant={"solid"} borderRadius={10} minW={"40vh"} type="email" onChange={handleOnChange}/>
            </Stack>
          </CardBody>
          <CardFooter justifyContent={"flex-end"}>
              <Button alignSelf={"center"} backgroundColor={"#9321DD"} minW={"full"} minH={"5vh"} isDisabled={error ? true : false} onClick={handleSubmit}>Submit</Button>
          </CardFooter>
        </Card>
    )
}