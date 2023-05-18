import {
  ChakraProvider,
  Box,
  extendTheme
} from "@chakra-ui/react"
import Navbar from "./components/Navigation"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Vision from "./components/Vision"

const theme = extendTheme({
  colors: {
    polisimBlue: {
      100: "#1E44A3",
      200: "#3D6BDE",
      300: "#CEDAFC",
      400: "#E1E9FB",
      500: "#F5F8FF",
    },
    polisimGray: {
      100: "#FDFDFD",
      200: "#FAFAFA",
      300: "#282828"
    }
  }
})



export const App = () => (
  <ChakraProvider theme={theme}>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');
    </style>

    <Navbar/>

    <Box position="absolute" top="0" zIndex={-1} w='100%' h='500px' bgGradient='linear(to-tr, #ffffff1A 45%, #FF00A81A)' />
    <Box position="absolute" top="0" zIndex={-1} w='100%' h='500px' bgGradient='linear(to-tl, #ffffff1A 45%, #486CC747)' />

    <Hero/>
    
    <Features/>

    {/*<Box position="absolute" top="35%" zIndex={-1} w='200%' left="-150%" h='1000px' bgGradient='radial(#FF00A81A, #ffffff1A 65%)' />
    <Box position="absolute" top="70%" zIndex={-1} w='200%' right="-150%" h='1000px' bgGradient='radial(#486CC747, #ffffff1A 65%)' />*/}

    <Vision/>

  </ChakraProvider>
)
