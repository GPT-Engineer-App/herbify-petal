import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Image, Box, IconButton, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaCamera } from "react-icons/fa";

const herbsData = [
  {
    id: 1,
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    image: "https://images.unsplash.com/photo-1708868746549-a45ae0be4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0dWxzaSUyMGhlcmJ8ZW58MHx8fHwxNzE3NDgwNDMzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Tulsi is a sacred plant in Hindu belief. It is known for its medicinal properties.",
    identify: "Tulsi leaves are green with a strong aroma.",
    found: "Commonly found in Indian subcontinent. Prefers warm weather.",
    use: "Used in teas, herbal remedies, and religious rituals.",
    howToUse: "Can be consumed as tea or applied as a paste.",
    quantity: 10,
  },
  // Add more herbs as needed
];

const HerbCard = ({ herb }) => {
  const toast = useToast();

  const handleAddToCart = () => {
    if (herb.quantity > 0) {
      toast({
        title: "Added to cart",
        description: `${herb.name} has been added to your cart.`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Out of stock",
        description: `${herb.name} is currently out of stock.`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
      <HStack spacing={4}>
        <Image boxSize="100px" src={herb.image} alt={herb.name} />
        <VStack align="start">
          <Text fontSize="xl" fontWeight="bold">
            {herb.name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {herb.scientificName}
          </Text>
          <Text>{herb.description}</Text>
          <Text>
            <strong>Identify:</strong> {herb.identify}
          </Text>
          <Text>
            <strong>Found:</strong> {herb.found}
          </Text>
          <Text>
            <strong>Use:</strong> {herb.use}
          </Text>
          <Text>
            <strong>How to Use:</strong> {herb.howToUse}
          </Text>
          <Button colorScheme={herb.quantity > 0 ? "teal" : "red"} onClick={handleAddToCart} isDisabled={herb.quantity === 0}>
            {herb.quantity > 0 ? "Add to Cart" : "Out of Stock"}
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHerbs = herbsData.filter((herb) => herb.name.toLowerCase().includes(searchTerm.toLowerCase()) || herb.scientificName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Herbify
        </Text>
        <HStack width="100%">
          <Input placeholder="Search for herbs or diseases..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <IconButton aria-label="Capture Image" icon={<FaCamera />} />
        </HStack>
        <VStack spacing={4} width="100%">
          {filteredHerbs.map((herb) => (
            <HerbCard key={herb.id} herb={herb} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
