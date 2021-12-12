import React, { FC } from 'react'
import {
  HStack,
  Flex,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  VStack,
  Input,
} from '@chakra-ui/react'

interface CnbExchangeFormProps {}

export const CnbExchangeForm: FC<CnbExchangeFormProps> = () => {
  return (
    <Flex
      p={'3rem'}
      w={'full'}
      alignItems={'flex-start'}
      borderRadius={'0.5rem'}
    >
      <HStack borderLeftRadius={'0.5rem'} p={'2rem'} flex={1} bg={'white'}>
        <VStack alignItems={'flex-start'}>
          <Text>You Have</Text>
          <NumberInput
            variant="flushed"
            size="lg"
            maxW={300}
            min={1}
            precision={2}
          >
            <NumberInputField fontSize={'2rem'} fontWeight={'bold'} />
          </NumberInput>
        </VStack>
        <VStack alignItems={'flex-start'}>
          <Text>Name of currency</Text>
          <Select size="lg" variant="flushed" placeholder="Flushed" />
        </VStack>
      </HStack>
      <HStack borderRightRadius={'0.5rem'} flex={1} p={'2rem'} bg={'#fafafa'}>
        <VStack alignItems={'flex-start'}>
          <Text>You Get</Text>
          <HStack>
            <Input
              flex={1}
              size="lg"
              variant="flushed"
              fontSize={'2rem'}
              fontWeight={'bold'}
              disabled
              value={1231}
            />
            <Text flex={1}>Czech Koruna</Text>
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  )
}
