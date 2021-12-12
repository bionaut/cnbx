import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useCnbCurrencies } from '@cnb/cnb-client'
import icons from 'currency-icons'

import {
  HStack,
  Flex,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  VStack,
  Input,
  Skeleton,
  InputGroup,
  Image,
  Center,
} from '@chakra-ui/react'

import { useConversion } from '../hooks'

export const ExchangeForm: FC = () => {
  const { data, isLoading } = useCnbCurrencies()
  const [symbol, setSymbol] = useState<string>('USD')
  const [amount, setAmount] = useState<string>('')
  const [value, convert] = useConversion()

  const selectedCurrencyIcon = useMemo(() => {
    return icons[symbol]
  }, [symbol])

  const onAmountChange = useCallback(
    (value) => {
      setAmount(value)
    },
    [setAmount],
  )

  const onSymbolChange = useCallback(
    (event) => {
      const newSymbol = event.target.value
      setSymbol(newSymbol)
    },
    [setSymbol],
  )

  useEffect(() => {
    convert(symbol, parseFloat(amount))
  }, [amount, symbol])

  return (
    <Skeleton isLoaded={!isLoading}>
      <Flex
        w={'full'}
        flexDirection={['column', 'column', 'row']}
        alignItems={'flex-start'}
        borderRadius={'0.5rem'}
      >
        <HStack
          borderLeftRadius={[0, 0, '0.5rem']}
          p={'2rem'}
          flex={1}
          bg={'white'}
        >
          <VStack alignItems={'flex-start'} flex={1}>
            <Text>You Have</Text>
            <NumberInput
              variant="flushed"
              size="lg"
              min={1}
              value={amount}
              onChange={onAmountChange}
            >
              <NumberInputField fontSize={'2rem'} fontWeight={'bold'} />
            </NumberInput>
          </VStack>
          <VStack alignItems={'flex-start'} flex={1}>
            <Text
              whiteSpace={'nowrap'}
              fontSize={['0.8rem', '0.8rem', '0.8rem', '1rem']}
            >
              {selectedCurrencyIcon?.name || ''}
            </Text>
            <InputGroup>
              <Center>
                <Image boxSize="30px" src={selectedCurrencyIcon?.icon} />
              </Center>
              <Select
                onChange={onSymbolChange}
                value={symbol}
                size="lg"
                variant="flushed"
              >
                {data.map(({ symbol, country }) => (
                  <option key={`o${symbol}`} value={symbol}>
                    {country}
                  </option>
                ))}
              </Select>
            </InputGroup>
          </VStack>
        </HStack>
        <HStack
          borderRightRadius={[0, 0, '0.5rem']}
          flex={1}
          p={'2rem'}
          bg={'#fafafa'}
        >
          <VStack alignItems={'flex-start'}>
            <Text>You Get</Text>
            <HStack w={'full'}>
              <Input
                flex={1}
                size="lg"
                variant="flushed"
                fontSize={'2rem'}
                fontWeight={'bold'}
                disabled
                value={value}
              />
              <Text fontSize={'2rem'}>CZK</Text>
            </HStack>
          </VStack>
        </HStack>
      </Flex>
    </Skeleton>
  )
}
