import React from 'react'
import { CnbClientProvider } from '@cnb/cnb-client'
import { CnbHeader, CnbNavbar, CnbPageLayout } from '@cnb/ui'
import { FeaturedRates } from './components/featured-rates'
import { ExchangeForm } from './components/exchange-form'
import { TitleWithTimestamp } from './components/title-with-timestamp'
import { RatesTable } from './components/rates-table'

export function App() {
  return (
    <CnbClientProvider>
      <CnbPageLayout>
        <CnbHeader>
          <CnbNavbar title={'CNB.X'} />
          <TitleWithTimestamp />
          <ExchangeForm />
          <FeaturedRates />
        </CnbHeader>
        <RatesTable />
      </CnbPageLayout>
    </CnbClientProvider>
  )
}

export default App
