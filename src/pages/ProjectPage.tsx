import { NavBar,Options } from "../components";
import { Container,Flex, Stack } from "@chakra-ui/layout";
import { DisplayBox } from "../pages/components";

export const ProjectPage = () => {
    return (
        <Flex m={"5%"} w={"90vw"} h={"90vh"}>
            <Container m={"0px"} w="15%">
                <NavBar/>
            </Container>  
            <Stack w="85%">
                <Options/>
                <Container m={"0px"} w="85%">
                    <DisplayBox type={"hi"}/>
                </Container>
            </Stack>
        </Flex>
    );
};