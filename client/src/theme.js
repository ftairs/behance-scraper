import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    brand: {},
  },
  components: {
    Heading: {
      fontFamily: '"Open Sans", sans-serif',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: '"Open Sans", sans-serif',
      },
    },
  },
});
export default theme;
