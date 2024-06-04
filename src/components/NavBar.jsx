import { Link } from "react-router-dom";
import { HStack, Button, Image } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack spacing={4} padding={4} justifyContent="flex-end">
      <Image src="https://via.placeholder.com/50" alt="Logo" boxSize="50px" />
      <Button as={Link} to="/" colorScheme="teal">
        Home
      </Button>
      <Button as={Link} to="/login" colorScheme="teal">
        Login
      </Button>
      <Button as={Link} to="/signup" colorScheme="teal">
        Sign Up
      </Button>
    </HStack>
  );
};

export default NavBar;
