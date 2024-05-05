import metaxotLogoUrl from "../assets/images/metaxot-logo-white.png";
import {
  Box,
  Button,
  Center,
  Container,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { INavigation } from "@/constants/navigation";
import MenuDrawer from "./menuDrawer";
import Image from "next/image";

interface INavbar {
  data: INavigation[];
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <Link key={idx} href={item.link} _hover={{ textDecoration: "none" }}>
            <Text
              fontWeight="bold"
              fontSize="xl"
              _hover={{
                color: "yellow",
              }}
            >
              {item.name}
            </Text>
          </Link>
        );
      })}
    </>
  );
};

const NavbarButtons = () => {
  return (
    <>
      <Button type="submit" onClick={() => {}}>
        Authorize
      </Button>
      <Button type="submit" onClick={() => {}}>
        Connect Wallet
      </Button>
    </>
  );
};

const Navbar: React.FC<INavbar> = ({ data }) => {
  return (
    <Center>
      <Stack
        as={"nav"}
        w={"full"}
        position={"absolute"}
        mt={12}
        top={"0"}
        justifyContent={"center"}
      >
        <Container maxW={"container.xl"}>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={{ base: "start", lg: "end" }}
              flex={1}
            >
              <Stack
                flex={1}
                justify={"start"}
                align={"center"}
                direction={"row"}
                spacing={"4rem"}
                display={{ base: "none", lg: "flex" }}
              >
                <MenuList data={data} />
              </Stack>
              <Image
                src={"/alita-ai-logo.png"}
                alt={"Alita AI Logo"}
                width={223}
                height={59}
              />
            </Box>
            <Stack
              flex={1}
              justify={"end"}
              align={"center"}
              direction={"row"}
              spacing={"4rem"}
              display={{ base: "none", lg: "flex" }}
            >
              <NavbarButtons />
            </Stack>
            <MenuDrawer>
              <MenuList data={data} />
              <NavbarButtons />
            </MenuDrawer>
          </Box>
        </Container>
      </Stack>
    </Center>
  );
};

export default Navbar;
