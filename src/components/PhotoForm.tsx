import useKycAuth from "@/hooks/kyc/useKycAuth";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Card, CardHeader, Heading, CardBody, Stack, Button, CardFooter, HStack, Spinner, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IPhotoForm{
  handleErrorKyc: () => void;
}

export const PhotoForm = ({handleErrorKyc}: IPhotoForm) => {
    const { t } = useTranslation()
    const toast = useToast()
    const router = useRouter()
    const {loading, error, userInfo} = useKycAuth()

    const handleError = async () => {
      await toast({
        title: 'Face Recognition Error',
        description: `${error}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        onCloseComplete: () => router.reload()
      })
    }

    useEffect(() => {
      if(error !== ""){
        handleError()
        
      }
    }, [error])

    return (
        <Card backgroundColor={"black"} p={5} borderRadius={20} mx={8}>
          <CardHeader>
            <Heading size='lg'>Face Verification</Heading>
          </CardHeader>
          <CardBody>
            <Stack alignItems={"center"}>
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