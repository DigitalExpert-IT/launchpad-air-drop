import { Card, CardHeader, Heading, CardBody, Stack, Text } from "@chakra-ui/react"
import React from "react";
import { IKycCard } from "@/constants/kyContent";
import {NotAllowedIcon, CheckCircleIcon} from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export const KycCard = ({title, description, validity}: IKycCard) => {
    const { t } = useTranslation()
    
    return (
        <Card align={"center"} p={3} borderRadius={15} backgroundColor={validity ? "#9321DD" : "#1E1E1E"}>
            <CardHeader>
                <Heading size='md'>{t(title)}</Heading>
            </CardHeader>
            <CardBody>
                <Stack>
                <Text pt='2' fontSize='sm'>
                    {t(description)}
                </Text>
                </Stack>
                <Stack mt={5} align={"center"}>
                {validity ? <CheckCircleIcon color={"#77DB89"}/> : <NotAllowedIcon/>}
                </Stack>
            </CardBody>
        </Card>
    )
}