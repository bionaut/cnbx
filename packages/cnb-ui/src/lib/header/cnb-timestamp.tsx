import React, { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/react'
import day from 'dayjs'

export const CnbTimestamp: FC = () => {
  return (
    <HStack flex={1} justifyContent={'flex-end'}>
      <VStack alignItems={'flex-start'}>
        <Text color={'white'}>Last updated</Text>
        <Text fontWeight={'bold'} color={'white'}>
          {day().format('DD.MM. YYYY')}
        </Text>
      </VStack>
    </HStack>
  )
}
