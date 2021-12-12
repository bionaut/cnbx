import React, { FC } from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'

import { CnbNavbar } from './cnb-navbar'
import { CnbMainTitle } from './cnb-title'
import { CnbTimestamp } from './cnb-timestamp'
import { CnbExchangeForm } from './cnb-exchange-form'
import { CoolBackground } from './cool-background'

export const CnbHeader: FC = () => {
  return (
    <VStack
      alignItems={'flex-start'}
      p={'1rem'}
      w={'full'}
      borderRadius={'0.5rem'}
      pos={'relative'}
      overflow={'hidden'}
    >
      <CoolBackground />
      <Box w={'full'} zIndex={1}>
        <CnbNavbar title={'CNB.X'} />
        <HStack justifyContent={'space-between'} w={'full'} p={'3rem'}>
          <CnbMainTitle />
          <CnbTimestamp />
        </HStack>
        <CnbExchangeForm />
      </Box>
    </VStack>
  )
}
