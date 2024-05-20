import { Card, CardHeader, Heading, CardBody, Stack, Text, Button, CardFooter, HStack, Image } from "@chakra-ui/react"
import { useCallback, useState, useRef, useEffect } from "react";
import {NotAllowedIcon, CheckCircleIcon} from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import Webcam from "react-webcam";

export const PhotoForm = () => {
    const webcamRef = useRef<Webcam>(null);
    const { t } = useTranslation()
    const [imgSrc, setImgSrc] = useState<string | null>(null)
    const [imgFile, setImgFile] = useState<string[]>([])
    const [camOpen, setCamOpen] = useState<boolean>(false)
    const capture = useCallback(() => {
      if(webcamRef){
        const imageSrc = webcamRef.current?.getScreenshot();
        setImgSrc(imageSrc!);
        setImgFile([imageSrc!]);
      }
      }, [webcamRef, setImgFile, setImgSrc]);
    
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };

    return (
        <Card backgroundColor={"black"} p={5} borderRadius={20} mx={8}>
          <CardHeader>
            <Heading size='lg'>Face Verification</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
            {imgSrc ? 
              (<Image src={imgFile[0]} alt=""/>) : (
              <Webcam
                audio={false}
                ref={webcamRef}
                height={360}
                screenshotFormat="image/jpeg"
                screenshotQuality={0.8}
                width={640}
                videoConstraints={videoConstraints}
                style={{borderRadius: 10}}
            >
            </Webcam>)
            
            }
            </Stack>
          </CardBody>
          <CardFooter>
            <HStack>
                <Button minH={"5vh"}>Capture</Button>
                <Button alignSelf={"center"} backgroundColor={"#9321DD"} minH={"5vh"} isDisabled={true}>Verify</Button>
            </HStack>
          </CardFooter>
        </Card>
    )
}