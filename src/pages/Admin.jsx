import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Admin() {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="add-content">
          <FormLabel>Add Content</FormLabel>
          <Input placeholder="Enter content" />
          <Button mt={2} colorScheme="teal">
            Add
          </Button>
        </FormControl>
        <FormControl id="remove-content">
          <FormLabel>Remove Content</FormLabel>
          <Input placeholder="Enter content ID" />
          <Button mt={2} colorScheme="red">
            Remove
          </Button>
        </FormControl>
        <FormControl id="update-content">
          <FormLabel>Update Content</FormLabel>
          <Input placeholder="Enter content ID" />
          <Input placeholder="Enter new content" mt={2} />
          <Button mt={2} colorScheme="blue">
            Update
          </Button>
        </FormControl>
      </VStack>
    </Box>
  );
}

export default Admin;
