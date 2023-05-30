import { NavBar } from "../components";
import { Flex, Spacer, HStack, Container, Text } from "@chakra-ui/layout";

export const SomethingElse = () => {
    return (
        <Flex>
            <Container w="15%" margin={"5%"}>
                <NavBar/>
            </Container>
            <Spacer/>
            <Text color={"#27592D"} marginTop={"250px"} fontSize={"100"}>I LOVE MY GF</Text>
            <Spacer/>
            <Container w="15%" margin={"5%"}>
            </Container>
        </Flex>
    );
};