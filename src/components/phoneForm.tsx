import { 
  Card, 
  CardHeader, 
  Heading, 
  CardBody, 
  Stack, 
  Text, 
  Button, 
  CardFooter, 
  HStack, 
  Input, 
  InputGroup, 
  InputLeftAddon, 
  InputRightElement, 
  Select } from "@chakra-ui/react"
import React from "react";
import { IKycCard } from "@/constants/kyContent";
import {NotAllowedIcon, CheckCircleIcon, CheckIcon} from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import {
  CountrySelector,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';

interface IPhoneForm {
  value?: string
}

export const PhoneForm = ({value}: IPhoneForm) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'id',
      value,
      countries: defaultCountries,
      onChange: (data) => {
        data.phone;
      },
    });
    const { t } = useTranslation()

    return (
      <Card backgroundColor={"black"} p={5} borderRadius={20} mx={8}>
          <CardHeader>
            <Heading size='lg'>Verify Phone Number</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text fontSize={"xs"}>Enter Your Phone Number</Text>
              <InputGroup>
                <InputLeftAddon w={"40%"}>
                  <Select variant={"unstyle"} backgroundColor={"rgba(0,0,0,0.0)"} fontSize={{base: "1.5vh", lg: "2vh"}}>
                    {defaultCountries.map((item, idx) => {
                      const countries = parseCountry(item);
                      return (
                        <option key={idx} value={countries.iso2}>
                          {countries.iso2}{"  +"}
                          {countries.dialCode}
                        </option>
                      )
                    })}
                  </Select>
                </InputLeftAddon>
                <Input type='tel' placeholder='phone number' backgroundColor={"#1E1E1E"}/>
              </InputGroup>
            </Stack>
          </CardBody>
          <CardFooter justifyContent={"flex-end"}>
            <Button backgroundColor={"#9321DD"} minW={"full"} minH={"5vh"} isDisabled={true}>Submit</Button>
          </CardFooter>
        </Card>
    )
}