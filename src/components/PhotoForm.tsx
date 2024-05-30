import useKycAuth from "@/hooks/kyc/useKycAuth";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Card, CardHeader, Heading, CardBody, Stack, Button, CardFooter, HStack, Spinner } from "@chakra-ui/react"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IPhotoForm{
  handleErrorKyc: () => void;
}

export const PhotoForm = ({handleErrorKyc}: IPhotoForm) => {
    const { t } = useTranslation()
    const {loading, error, userInfo} = useKycAuth()

    console.log("err", error)

    useEffect(() => {
      if(error !== ""){
        handleErrorKyc()
      }
    }, [error])

    return (
        <Card backgroundColor={"black"} p={5} borderRadius={20} mx={8}>
          <CardHeader>
            <Heading size='lg'>Face Verification</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              {loading ? (
                <Spinner/>
              ) : (
                <CheckCircleIcon color={"#77DB89"}/>
              )}
            </Stack>
          </CardBody>
        </Card>
    )
}