import { Box, Button, Text, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Image src="/path/to/your/image.jpg" alt="Website Image" mb={6} />
      <Text fontSize="2xl" mb={6}>
        Welcome to Our Website!
      </Text>
      <Text fontSize="lg" mb={6}>
        Our website offers amazing features to help you manage your tasks efficiently.
      </Text>
      <VStack spacing={4}>
        <Button as={Link} to="/login" colorScheme="teal" size="lg">
          Login
        </Button>
        <Button as={Link} to="/signup" colorScheme="teal" size="lg">
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
}

export default Home;
