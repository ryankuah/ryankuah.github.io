import {Link, Image, Stack, Fade} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { Options } from "./Options";


export const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
            <Stack onMouseLeave={() => setIsOpen(false)}>
                <Image
                onClick={() => navigate("/")}
                onMouseOver= {() => setIsOpen(true)}
                _hover={{cursor: "pointer"}}
                src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" 
                boxSize="4em" 
                borderRadius="full"                     
                />
                <Fade in={isOpen}>
                    {isOpen ? (
                    <Stack>
                        <Link href="/about" pt={"2%"} fontSize={"2xl"} fontFamily={"Serif"}>About</Link>
                        <Link href="/projects" pt={"2%"} fontSize={"2xl"} fontFamily={"Serif"}>Projects</Link>
                        <Link href="/somethingelse" pt={"2%"} fontSize={"2xl"} fontFamily={"Serif"}>Something Else</Link>
                        <Options/>
                    </Stack>
                    ) : null}
                </Fade>
            </Stack>
    );
};