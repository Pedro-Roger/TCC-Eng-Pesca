import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import logo from "../assets/logoSeaFlow.png";

import { Outlet } from "react-router-dom";
import SideBar from "../components/my components/sidebar";
import { FaBars } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Menu from "../components/my components/menu";

const DashBoard = () => {
  const [isOpen, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <Flex
        as="header"
        bg="#091219"

        color="white"
        align="center"
        justifyContent={{ base: "space-evenly", md: "" }}
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}

      >
        <Flex
          align="center"
        >
          <img src={logo} alt="Logo SeaFlow" width={"120px"} height={"auto"} />

          <Text
            as={"h1"}
            fontSize={"23px"}
            fontWeight={"black"}
            fontStyle={"italic"}
            color={"#F7F7F7"}
            ml={"-20px"}
          >
            SEAFLOW
          </Text>
        </Flex>

        <Icon
          as={FaBars}
          color="white"
          boxSize={6}
          ml={-1}
          display={{ base: "", md: "none" }}
          onClick={() => setOpen(!isOpen)}
          cursor="pointer"
        />
      </Flex>

      {isOpen && (
        <Box
          ref={menuRef}
          position="absolute"
          w="100%"
          zIndex="1000"

        >
          <Menu />
        </Box>
      )}

      <Flex as={"nav"} flex={1}>
        <SideBar />

        <Box flex={1}>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default DashBoard;
