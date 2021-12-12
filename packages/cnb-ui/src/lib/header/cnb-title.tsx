import React, { FC } from 'react'
import { Heading } from '@chakra-ui/react'

export const CnbMainTitle: FC = () => {
  return (
    <Heading flex={2} fontWeight={'800'} color={'white'} as="h2">
      All-in-one currency exchange platform.
    </Heading>
  )
}
