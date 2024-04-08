import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Input, Button, Text, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [orgName, setOrgName] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [stakeholderType, setStakeholderType] = useState("");
  const [vestingPeriod, setVestingPeriod] = useState("");

  const handleOrgRegistration = () => {
    // TODO: Implement organization registration logic
    console.log("Registering organization:", orgName, tokenName);
  };

  const handleStakeholderAddition = () => {
    // TODO: Implement stakeholder addition logic
    console.log("Adding stakeholder:", stakeholderType, vestingPeriod);
  };

  return (
    <ChakraProvider>
      <Box p={6}>
        <VStack spacing={4}>
          <FormControl id="org-name">
            <FormLabel>Organization Name</FormLabel>
            <Input placeholder="Enter organization name" value={orgName} onChange={(e) => setOrgName(e.target.value)} />
          </FormControl>
          <FormControl id="token-name">
            <FormLabel>Token Name</FormLabel>
            <Input placeholder="Enter token name" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
          </FormControl>
          <Button leftIcon={<FaPlus />} onClick={handleOrgRegistration}>
            Register Organization
          </Button>
          <Text fontSize="xl" fontWeight="bold" pt={6}>
            Add Stakeholder
          </Text>
          <FormControl id="stakeholder-type">
            <FormLabel>Stakeholder Type</FormLabel>
            <Select placeholder="Select type" value={stakeholderType} onChange={(e) => setStakeholderType(e.target.value)}>
              <option value="investor">Investor</option>
              <option value="founder">Founder</option>
              <option value="community">Community</option>
              <option value="advisor">Advisor</option>
            </Select>
          </FormControl>
          <FormControl id="vesting-period">
            <FormLabel>Vesting Period (Months)</FormLabel>
            <Input placeholder="Enter vesting period" value={vestingPeriod} onChange={(e) => setVestingPeriod(e.target.value)} type="number" />
          </FormControl>
          <Button leftIcon={<FaPlus />} onClick={handleStakeholderAddition}>
            Add Stakeholder
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
