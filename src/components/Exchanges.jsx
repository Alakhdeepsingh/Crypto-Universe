import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
<<<<<<< HEAD
        //sending array to exchanges
        setLoading(false);
        //jesse hii data fetch hojaega tabh loading false hojaega
=======
        setLoading(false);
>>>>>>> d191d2734c933c44faaf0e148468554a084c667f
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
<<<<<<< HEAD
            
            {exchanges.map((i) => (
              //exchanges is array
              //i is object
=======
            {exchanges.map((i) => (
>>>>>>> d191d2734c933c44faaf0e148468554a084c667f
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
<<<<<<< HEAD
          transform: "scale(1.4)",
=======
          transform: "scale(1.1)",
>>>>>>> d191d2734c933c44faaf0e148468554a084c667f
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
<<<<<<< HEAD
      {/* //noOfLines is in chakra ui */}
=======
>>>>>>> d191d2734c933c44faaf0e148468554a084c667f
    </VStack>
  </a>
);

export default Exchanges;
