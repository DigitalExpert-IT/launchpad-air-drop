import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  DrawerHeader,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface IDrawer {
  children: ReactNode;
}

const MenuDrawer: React.FC<IDrawer> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button display={{ base: "flex", lg: "none" }} onClick={onOpen}>
        <HamburgerIcon fontSize={"4xl"} color={"white"} />
      </Button>
      <Drawer isOpen={isOpen} placement={"right"} size={"md"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
