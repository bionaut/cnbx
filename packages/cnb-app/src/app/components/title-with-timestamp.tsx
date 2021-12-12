import React, { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { CnbMainTitle, CnbTimestamp } from '@cnb/ui'

export const TitleWithTimestamp: FC = () => {
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent={'space-between'}
      w={'full'}
    >
      <CnbMainTitle title={'All-in-one currency exchange platform.'} />
      <CnbTimestamp />
    </Flex>
  )
}
