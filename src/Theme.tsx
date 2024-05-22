import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";
import { defineStyleConfig } from '@chakra-ui/react'

const IconButton = defineStyleConfig({
  variants: {
    transparent: {
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
        bg: mode("black", "black")(props),
        color: mode("white", "white")(props),
      },
    }),
  },
})
export default theme;
