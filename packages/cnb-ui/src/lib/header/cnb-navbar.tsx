import React, { FC } from 'react'
import { IconButton, Heading, HStack, Link } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'
import { useCnbCurrencies } from '@cnb/cnb-client'

interface CnbMainTitleProps {
  title: string
}

export const CnbNavbar: FC<CnbMainTitleProps> = ({ title }) => {
  const { refetch } = useCnbCurrencies()
  return (
    <HStack justifyContent={'space-between'} w={'full'}>
      <Heading fontWeight={'800'} color={'white'} as="h1">
        {title}
      </Heading>
      <HStack>
        <Link
          isExternal
          href="https://cz.linkedin.com/in/jan-kraj%C5%88%C3%A1k-1658a4b4"
          color={'white'}
        >
          About me
        </Link>
        <IconButton
          colorScheme="blue"
          size="lg"
          icon={<RepeatIcon />}
          title={'Refetch prices'}
          aria-label={'Refetch prices'}
          onClick={() => refetch()}
        />
      </HStack>
    </HStack>
  )
}
