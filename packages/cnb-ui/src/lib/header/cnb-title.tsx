import React, { FC } from 'react'
import { Heading } from '@chakra-ui/react'

interface CnbTitleProps {
  title: string
}

export const CnbMainTitle: FC<CnbTitleProps> = ({ title }) => {
  return (
    <Heading
      textAlign={['center', 'center', 'left']}
      fontWeight={'800'}
      color={'white'}
      flex={2}
      as="h2"
    >
      {title}
    </Heading>
  )
}
