import { 
  Card, 
  CardHeader, 
  Heading, 
  CardBody, 
  Stack, 
  Text, 
  Button, 
  CardFooter, 
  Input, 
  InputGroup, 
  InputLeftAddon, 
  Select, } from "@chakra-ui/react"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CountrySelector,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { IFormComponent } from "./emailForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";



export const PhoneForm = ({handleNextStep}: IFormComponent) => {
  const [phone, setPhone] = useState("")
  const [error, setError] = useState(true)
  const route = useRouter();
  const referrer = useSelector((state: RootState) => state.referrer.referrer);
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'id',
      countries: defaultCountries,
      onChange: (data) => {
        data.phone;
      },
    });
    const { t } = useTranslation()

    const handleOnChange = (e: any) => {
      const currentValue = country.dialCode+e
      if(currentValue.length >= 4 && currentValue.length <= 13){
        setPhone(currentValue)
        setError(false)
      } else {
        setPhone("")
        setError(true)
      }
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      sessionStorage.setItem("local", country.dialCode)
      sessionStorage.setItem("phone", phone)
      route.push("/")
    }

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
                  <Select variant={"unstyle"} backgroundColor={"rgba(0,0,0,0.0)"} fontSize={{base: "1.5vh", lg: "2vh"}} onChange={(e) => setCountry(e.target.value)}>
                    {defaultCountries.map((item, idx) => {
                      const countries = parseCountry(item);
                      return (
                        <option key={idx} value={countries.iso2}>
                          {countries.iso2.toUpperCase()}{"  +"}
                          {countries.dialCode}
                        </option>
                      )
                    })}
                  </Select>
                </InputLeftAddon>
                <Input type='tel' placeholder='phone number' backgroundColor={"#1E1E1E"} onChange={(e) => handleOnChange(e.target.value)}/>
              </InputGroup>
            </Stack>
          </CardBody>
          <CardFooter justifyContent={"flex-end"}>
              <Button backgroundColor={"#9321DD"} minW={"full"} minH={"5vh"} isDisabled={ error ? true : false} onClick={handleSubmit}>Submit</Button>
          </CardFooter>
        </Card>
    )
}