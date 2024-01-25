import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // react-router-dom modülünden useLocation hook'u kullanılarak şu anki sayfanın konumu alınıyor.
  const location = useLocation();
  // Örnek bir profileId tanımlanıyor (bu kısım değişcek)
  let profileId = 3;

  return (
    <Box bg="teal" p={4} boxShadow="md">
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Heading color="black">QueryQuest</Heading>
        {/* TODO QQ Logosu Gelicek  */}
        <Spacer />
        {/* Spacer bileşeni ile boş bir alan eklenerek diğer elemanların sağa yaslanması sağlanıyor. */}
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
