// FabModal.js
import React, { useEffect } from 'react';
import {
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormLabel,
  Text
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FormInput } from '@/lib/FormInput';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setReferrer } from '@/redux/referrerSlice';

interface FormType{
    referrer: string;
}

export const FabModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { control, getValues, setValue, handleSubmit } = useForm<FormType>();
  const dispatch = useDispatch();
  

  const handleSave = (data: FormType) => {
    dispatch(setReferrer(data.referrer))
    onClose
  }

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      {/* Floating Action Button */}
      <IconButton
              icon={<AddIcon />}
              onClick={onOpen}
              position="fixed"
              bottom="20px"
              right="20px"
              colorScheme="teal"
              size="lg"
              isRound aria-label={''}      />

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={{lg: "lg", md: "2xl"}} >
        <ModalOverlay />
        <ModalContent mt={"20%"} borderRadius={20} backgroundColor={"#9321DD"} as="form" onSubmit={handleSubmit(handleSave)}>
          <ModalBody>
          <FormLabel
            mt={5}
            textAlign={"left"}
            fontWeight={"bold"}
            fontSize={{ base: "3xl", sm: "3xl" }}
            color={"white"}
            >
        {t("form.label.referrer")}
      </FormLabel>
      <Text pb={5}>{t("form.helperText.referrer")}</Text>
      <FormInput
        control={control}
        name="referrer"
        isRequired
        px={3}
        py={8}
        fontSize={{ base: "sm", sm: "medium" }}
        color={"black"}
        placeholder={"   "+t("form.placeholder.referrer") ?? ""}
        _placeholder={{ color: "black", opacity: "0.5" }}
        borderRadius={15}
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
          </ModalBody>

          <ModalFooter gap={5} alignSelf={"center"} w={"100%"}>
            <Button variant="solid" backgroundColor={"#3C014A"} type='submit' size={"lg"} onClick={onClose} minW={"45%"}>Close</Button>
            <Button variant="solid" backgroundColor={"black"} type='submit' size={"lg"} minW={"50%"}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
