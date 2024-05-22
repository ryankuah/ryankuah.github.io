import { NavBar, Options } from "../components";
import { Image, Center, VStack } from '@chakra-ui/react'
import logo from "../assets/logo.jpg";

export const ComingSoonPage = () => {
  return (
    <div>
      <Center height="100vh">
        <VStack>
          <Image src={logo} boxSize="100px" />
          <h1>Coming Soon!</h1>
        </VStack>
      </Center>
    </div>
  );
};
