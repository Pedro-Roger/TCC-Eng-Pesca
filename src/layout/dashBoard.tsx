import { Box, Flex, Text } from "@chakra-ui/react";
import logo from "../assets/logoSeaFlow.png";

import { Outlet } from "react-router-dom";
import SideBar from "../components/ui/sidebar";

const DashBoard = () => {

    

    return ( 

      <>
        <Flex 
          as="header" 
          bg="#11444A" 
          color="white" 
          align="center" 
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
  
          <img 
            src={logo} 
            alt="Logo SeaFlow" 
            width={"120px"} 
            height={"auto"} 
          />
  
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
  
        <Flex 
          as={"nav"} 
          flex={1}
        >
          <SideBar/>
  
          <Box 
            flex={1} 
            padding={4}
          >
           <Outlet/>
          </Box>
        </Flex>
      </>

     );
}
 
export default DashBoard;