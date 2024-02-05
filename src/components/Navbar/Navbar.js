// Navbar.js
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ModalForm from "../Post/ModalForm";

const Navbar = () => {
  const location = useLocation();
  let profileId = 3;

  return (
    <Box bg="teal" p={4} boxShadow="md">
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading color="black" mr={5}>
          QueryQuest
        </Heading>
        <Spacer />
        <ModalForm></ModalForm>
        <Spacer />
        {/* TODO QQ Logosu Gelicek  */}
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <RouterLink to="/">
            <Button color={location.pathname === "/" ? "black" : "white"} mr={5}>
              Home
            </Button>
          </RouterLink>

          <RouterLink to={"/profiles/" + profileId}>
            <Button color={location.pathname === "/profiles/" + profileId ? "black" : "white"} mr={5}>
              Profile
            </Button>
          </RouterLink>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Button variant="ghost" color="white" fontSize="lg">
            <HamburgerIcon />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
