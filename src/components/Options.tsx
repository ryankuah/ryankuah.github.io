import {IconButton, Button, Icon, Box} from "@chakra-ui/react";
import {useColorMode} from "@chakra-ui/color-mode";
import {BsSun,BsMoon} from "react-icons/bs";

export const Options = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return(
        <Box>
            <IconButton 
            aria-label="Toggle Theme" 
            icon={<Icon as={colorMode === 'light' ? BsMoon : BsSun} />} 
            onClick={toggleColorMode}
            variant="transparent"
            />
        </Box>
    )
}