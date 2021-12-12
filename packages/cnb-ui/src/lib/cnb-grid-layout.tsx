import { ChakraProvider, Flex, Container, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import '@fontsource/montserrat'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/900.css'

import { cnbTheme } from './cnb-theme'

export const CnbPageLayout: FC = (props) => {
  const { children } = props
  return (
    <ChakraProvider theme={cnbTheme}>
      <Flex h={'100vh'}>
        <Container maxW={'container.xl'} mt={'5rem'}>
          <VStack
            h={'full'}
            w={'full'}
            spacing={'2rem'}
            alignItems={'flex-start'}
          >
            {children}
          </VStack>
        </Container>
      </Flex>
    </ChakraProvider>
  )
}
