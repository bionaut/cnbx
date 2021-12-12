import React, { FC } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Currency } from '@cnb/cnb-client'

interface CnbFeaturedRateProps {
  rate: Currency
}

export const CnbFeaturedRate: FC<CnbFeaturedRateProps> = (props) => {
  const {
    rate: { name, rate },
  } = props

  return (
    <Flex
      flexDirection={'column'}
      alignItems={'flex-start'}
      background={'rgba(255, 255,255, 0.1)'}
      borderRadius={'0.5rem'}
      p={'1rem'}
    >
      <Text color={'gray.300'}>{name.toUpperCase()}</Text>
      <Text color={'white'} fontWeight={'bold'}>
        {rate} CZK
      </Text>
    </Flex>
  )
}
