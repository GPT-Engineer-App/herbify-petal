import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

function Admin() {
  const [herbDetails, setHerbDetails] = useState({
    name: "",
    scientificName: "",
    image: "",
    description: "",
    identify: "",
    found: "",
    use: "",
    howToUse: "",
    quantity: 0,
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setHerbDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleAddHerb = () => {
    toast({
      title: "Herb added.",
      description: "The herb has been added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter herb name" value={herbDetails.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="scientificName">
          <FormLabel>Scientific Name</FormLabel>
          <Input placeholder="Enter scientific name" value={herbDetails.scientificName} onChange={handleChange} />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Image URL</FormLabel>
          <Input placeholder="Enter image URL" value={herbDetails.image} onChange={handleChange} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Input placeholder="Enter description" value={herbDetails.description} onChange={handleChange} />
        </FormControl>
        <FormControl id="identify">
          <FormLabel>How to Identify</FormLabel>
          <Input placeholder="Enter identification details" value={herbDetails.identify} onChange={handleChange} />
        </FormControl>
        <FormControl id="found">
          <FormLabel>Where is it found?</FormLabel>
          <Input placeholder="Enter location details" value={herbDetails.found} onChange={handleChange} />
        </FormControl>
        <FormControl id="use">
          <FormLabel>Where to use it?</FormLabel>
          <Input placeholder="Enter usage details" value={herbDetails.use} onChange={handleChange} />
        </FormControl>
        <FormControl id="howToUse">
          <FormLabel>How to use it?</FormLabel>
          <Input placeholder="Enter usage instructions" value={herbDetails.howToUse} onChange={handleChange} />
        </FormControl>
        <FormControl id="quantity">
          <FormLabel>Available Quantity</FormLabel>
          <Input type="number" placeholder="Enter quantity" value={herbDetails.quantity} onChange={handleChange} />
        </FormControl>
        <Button mt={2} colorScheme="teal" onClick={handleAddHerb}>
          Add Herb
        </Button>
      </VStack>
    </Box>
  );
}

export default Admin;
