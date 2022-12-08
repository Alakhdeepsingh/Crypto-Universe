import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<<<<<<< HEAD
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
=======
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
>>>>>>> d191d2734c933c44faaf0e148468554a084c667f
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
