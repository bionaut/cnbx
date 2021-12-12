import React, { FC } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/react'
import day from 'dayjs'

/**
 * Just for decorative purposes :)
 * But I can imagine this to be a real useful element in real app.
 * With countdown and re-fetching latest data
 */
export const CnbTimestamp: FC = () => {
  return (
    <HStack
      flex={1}
      justifyContent={['center', 'center', 'flex-end']}
      mt={[10, 10, 0]}
    >
      <VStack alignItems={'flex-start'}>
        <Text color={'white'}>Last updated</Text>
        <Text fontWeight={'bold'} color={'white'}>
          {day().format('DD.MM. YYYY')}
        </Text>
      </VStack>
    </HStack>
  )
}
