import metaxotLogoUrl from "../assets/images/metaxot-logo-white.png";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { INavigation } from "@/constants/navigation";
import MenuDrawer from "./menuDrawer";
import "@fontsource/poppins";
import { useEffect, useState } from "react";

interface INavbar {
  data: INavigation[];
}

function scrollFilter() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  return winScroll ? 5 : 0;
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <Link key={idx} href={item.link} _hover={{ textDecoration: "none" }}>
            <Text
              fontSize="md"
              _hover={{
                color: "yellow",
              }}
            >
              {item.name.toUpperCase()}
            </Text>
          </Link>
        );
      })}
    </>
  );
};

const NavbarButtons = () => {
  return (
    <Flex gap={2}>
      <Button
        type="submit"
        onClick={() => {}}
        borderRadius={"50px"}
        fontSize={"md"}
        bg={"transparent"}
        border={"1px solid #FFFFFF"}
        fontWeight={"400"}
      >
        Authorize
      </Button>
      <Button
        type="submit"
        onClick={() => {}}
        background={"#9321DD"}
        fontSize={"md"}
        borderRadius={"50px"}
        fontWeight={"400"}
      >
        Connect Wallet
      </Button>
    </Flex>
  );
};

const Navbar: React.FC<INavbar> = ({ data }) => {
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setFilter(scrollFilter());
    };

    document.body.addEventListener("scroll", onScroll);

    return function cleanup() {
      document.body.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Center
      style={{
        backdropFilter: `blur(${filter}px)`,
      }}
      position={"fixed"}
      w={"100%"}
      zIndex={"20"}
    >
      <Stack as={"nav"} w={"full"} mt={12} top={"0"} justifyContent={"center"}>
        <Container maxW={"container.xl"}>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={{ base: "start", md: "space-between" }}
              width={"100%"}
            >
              <Heading
                background={
                  "linear-gradient(100.36deg, #FD92FD 2.4%, #9321DD 98.97%)"
                }
                fontFamily={"Rubik One"}
                fontSize={"30px"}
                bgClip="text"
                flex={1}
              >
                ALITA AI
              </Heading>
              <Stack
                flex={2}
                justify={"space-around"}
                align={"center"}
                direction={"row"}
                display={{ base: "none", lg: "flex" }}
                fontFamily={"Poppins"}
                fontWeight={"300"}
              >
                <MenuList data={data} />
              </Stack>
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
            </Box>
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
