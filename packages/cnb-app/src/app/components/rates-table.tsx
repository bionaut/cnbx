import React, { FC } from 'react'
import { useCnbCurrencies } from '@cnb/cnb-client'
import { Skeleton, VStack } from '@chakra-ui/react'
import { CnbRateItem } from '@cnb/ui'

export const RatesTable: FC = () => {
  const { data, isLoading } = useCnbCurrencies()
  return (
    <Skeleton w={'full'} isLoaded={!isLoading}>
      <VStack
        id={'all-rates'}
        w={'full'}
        flex={1}
        bg={'rgba(255, 255, 255, 0.2)'}
        p={'1rem'}
      >
        {data.map((item) => (
          <CnbRateItem key={`ti${item.symbol}`} data={item} />
        ))}
      </VStack>
    </Skeleton>
  )
}
