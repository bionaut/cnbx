import React, { FC, useMemo } from 'react'
import { Currency } from '@cnb/cnb-client'
import { Center, Grid, Image, Text } from '@chakra-ui/react'
import icons from 'currency-icons'

interface CnbTableProps {
  data: Currency
}

const sizes = ['0.7rem', '0.8rem', '1rem']

export const CnbRateItem: FC<CnbTableProps> = (props) => {
  const {
    data: { symbol, rate, country, name },
  } = props

  const currency = useMemo(() => {
    return icons[symbol]
  }, [symbol])

  return (
    <Grid
      w={'full'}
      templateColumns={'repeat(5, 1fr)'}
      templateRows={'50px'}
      justifyContent={'center'}
      alignItems={'center'}
      bg={'rgba(255, 255,255, 0.2)'}
      sx={{
        ':hover': { background: 'rgba(255, 255,255, 0.5)' },
      }}
    >
      <Center>
        <Image boxSize={['20px', '40px']} src={currency?.icon} />
      </Center>
      <Center>
        <Text fontSize={sizes}>{country}</Text>
      </Center>
      <Center display={['none', 'flex']}>
        <Text fontSize={sizes}>{name}</Text>
      </Center>
      <Center>
        <Text fontSize={sizes}>{symbol}</Text>
      </Center>
      <Center>
        <Text whiteSpace={'nowrap'} fontSize={sizes}>
          <b>{rate}</b> CZK
        </Text>
      </Center>
    </Grid>
  )
}
