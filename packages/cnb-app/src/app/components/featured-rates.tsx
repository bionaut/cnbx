import React, { FC, useCallback } from 'react'
import { useRates } from '../hooks'
import { HStack, Link, Skeleton } from '@chakra-ui/react'
import { CnbFeaturedRate } from '@cnb/ui'

export const FeaturedRates: FC = () => {
  const [rates, isLoading] = useRates(['USD', 'EUR', 'CHF', 'GBP'])

  const scroll = useCallback(() => {
    const ref = document.getElementById('all-rates')
    if (ref) {
      ref.scrollIntoView()
    }
  }, [])

  return (
    <Skeleton h={'80px'} w={'full'} isLoaded={!isLoading}>
      <HStack w={'full'} alignItems={'center'} spacing={['0.1rem', '1rem']}>
        {rates.map((rate) => (
          <CnbFeaturedRate key={`f${rate.symbol}`} rate={rate} />
        ))}
        <Link
          onClick={scroll}
          pl={'1rem'}
          color={'white'}
          display={['none', 'none', 'block']}
        >
          Show more
        </Link>
      </HStack>
    </Skeleton>
  )
}
