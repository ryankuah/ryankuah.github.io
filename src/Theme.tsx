import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";
import { defineStyleConfig } from '@chakra-ui/react'

const IconButton = defineStyleConfig({
    variants: {
        transparent:{
        }
    },
})


const theme = extendTheme({
    components: {
        IconButton,
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("#f6e3ba", "#091c45") (props),
                color: mode("black", "white") (props),
            },
        }),
    },
})
export default theme;