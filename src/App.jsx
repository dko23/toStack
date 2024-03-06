import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './users'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
      <ChakraProvider>
      <Users/>
         </ChakraProvider>
    </>
  )
}

export default App
