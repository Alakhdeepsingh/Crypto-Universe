import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // To stack elements in horizontal or vertical direction only, use the HStack or VStack components
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"outline"} color={"white"}>
        {/* unstyled we don't need any style */}
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"outline"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"outline"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
