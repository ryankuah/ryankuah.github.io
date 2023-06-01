import { NavBar } from "../components";
import { Flex, Container} from "@chakra-ui/layout";

export const SomethingElse = () => {
    return (
        <Flex>
            <Container w="15%" margin={"5%"}>
                <NavBar/>
            </Container>
        </Flex>
    );
};