import React, { FC } from 'react'
import { HStack, Heading, Link, Button } from '@chakra-ui/react'

interface CnbMainTitleProps {
  title: string
}

export const CnbNavbar: FC<CnbMainTitleProps> = ({ title }) => {
  return (
    <HStack justifyContent={'space-between'} w={'full'} p={'3rem'}>
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
        <Button colorScheme="blue" size="lg">
          Button
        </Button>
      </HStack>
    </HStack>
  )
}
