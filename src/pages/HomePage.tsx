import { NavBar, Options } from "../components";
import { Container, Flex, Stack} from "@chakra-ui/layout";

export const HomePage = () => {
    return (
        <Flex m={"5%"} >
            <Container m={"0px"} w="15%">
                <NavBar/>
            </Container>  
            <Stack w="85%">
                <Options/>
                <Container m={"0px"} w="100%">
                    <h1>Home Page</h1>
                </Container>
            </Stack>
        </Flex>
    );
};