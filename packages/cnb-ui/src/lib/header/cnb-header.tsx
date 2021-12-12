import React, { FC } from 'react'
import { VStack } from '@chakra-ui/react'
import { CoolBackground } from './cool-background'

export const CnbHeader: FC = ({ children }) => {
  return (
    <VStack
      w={'full'}
      p={['1rem', '2rem', '5rem']}
      pt={['1rem', '3rem']}
      pb={['2rem']}
      alignItems={'flex-start'}
      pos={'relative'}
    >
      <CoolBackground />
      <VStack spacing={'2rem'} w={'full'} zIndex={1}>
        {children}
      </VStack>
    </VStack>
  )
}
