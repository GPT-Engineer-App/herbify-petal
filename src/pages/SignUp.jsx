import React, { useState } from "react";
import { Container, VStack, Input, Button, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignUp = () => {
    toast({
      title: "Account created.",
      description: "Your account has been created successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate("/login");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md" py={8}>
        <Heading>Sign Up</Heading>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="teal" onClick={handleSignUp}>
          Sign Up
        </Button>
      </VStack>
    </Container>
  );
};

export default SignUp;
