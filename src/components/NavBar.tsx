import {Link, Image, Stack, Collapse} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";


export const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
            <Stack onMouseLeave={() => setIsOpen(false)}>
                <Image
                onClick={() => navigate("/")}
                onMouseOver= {() => setIsOpen(true)}
                _hover={{cursor: "pointer"}}
                src={logo}
                color={"black"}
                boxSize="4em"                      
                />
                <Collapse in={isOpen}>
                    {isOpen ? (
                    <Stack>
                        <Link href="/about" pt={"2%"} fontSize={"2xl"} fontFamily={"Serif"}>About</Link>
                        <Link href="/projects" pt={"2%"} fontSize={"2xl"} fontFamily={"Serif"}>Projects</Link>
                        <Link href="/somethingelse" pt={"2%"} fontSize={"2xl"} fontFamily={"Serif"}>Something Else</Link>
                    </Stack>
                    ) : null}
                </Collapse>
            </Stack>
    );
};