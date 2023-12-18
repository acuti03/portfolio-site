'use client'

import { ChakraProvider } from '@chakra-ui/react'

export const Providers = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>
}