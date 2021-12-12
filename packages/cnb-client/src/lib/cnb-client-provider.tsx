import React, { FC } from 'react'
import { QueryClientProvider } from 'react-query'
import { cnbClient } from './cnb-client'

export const CnbClientProvider: FC = (props) => {
  const { children } = props

  return (
    <QueryClientProvider client={cnbClient}>{children}</QueryClientProvider>
  )
}
