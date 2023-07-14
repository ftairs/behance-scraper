import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    brand: {
      main: "#053eff",
    },
  },
  components: {
    Heading: {
      fontFamily: '"Open Sans", sans-serif',
    },
    Tabs: {
      baseStyle: {
        border: "0",
        borderColor: "transparent",
        tablist: {
          borderColor: "transparent",
          gap: 4,
        },
        tabpanels: {
          borderColor: "transparent",
        },
        tab: {
          bg: "transparent",
          borderRadius: 10,
          border: "none !important",
          boxShadow: "none",
          _selected: {
            bg: "brand.main",
            color: "white",
            border: "none",
            boxShadow: "none",
          },
        },
      },
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
