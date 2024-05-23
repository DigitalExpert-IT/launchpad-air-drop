import useKycAuth from "@/hooks/kyc/useKycAuth";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Card, CardHeader, Heading, CardBody, Stack, Button, CardFooter, HStack, Spinner } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";

export const PhotoForm = () => {
    const { t } = useTranslation()
    const {loading, error, userInfo} = useKycAuth()
    
    console.log("error", error)

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