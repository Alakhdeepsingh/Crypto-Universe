import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner size={"xl"} />
      </Box>
    </VStack>
  );
};

export default Loader;
<<<<<<< HEAD
 
=======
>>>>>>> d191d2734c933c44faaf0e148468554a084c667f
