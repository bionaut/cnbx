import { ChakraProvider, Flex, Container, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import '@fontsource/montserrat'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/900.css'

import { cnbTheme } from './cnb-theme'

const bg = {
  backgroundColor: '#F5F6FA',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23F5F6FA' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23eaf0fc' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23dcebfd' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23cbe6fe' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23b7e2fd' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23A1DFFA' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
}

export const CnbPageLayout: FC = (props) => {
  const { children } = props
  return (
    <ChakraProvider theme={cnbTheme}>
      <Flex minH={'100vh'} style={bg}>
        <Container maxW={'container.xl'} mt={['1rem', '2rem', '5rem']}>
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
