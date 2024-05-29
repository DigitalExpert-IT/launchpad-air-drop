// src/components/MenuDrawer.js
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IDrawer {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<IDrawer> = ({ children, isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement={"right"} size={"md"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={"#22012A"} maxW={{base: "80vw", lg: "25vw"}}>
        <DrawerHeader>
          <DrawerCloseButton onClick={onClose} />
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
