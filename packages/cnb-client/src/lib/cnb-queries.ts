import { useQuery } from 'react-query'
import { CnbQuery } from './cnb-types'
import { txtToJSON } from './cnb-transform'
import { cnbCurrenciesUrl } from './cnb-constants'

/**
 * Fetches and transforms CNB currencies
 */
async function fetchCurrencyRates() {
  const res = await fetch(cnbCurrenciesUrl)
  return res.text()
}

export function useCnbCurrencies() {
  const { data: rawData, ...rest } = useQuery<string>(
    CnbQuery.rates,
    fetchCurrencyRates,
  )
  const data = txtToJSON(rawData) || []

  return { data, ...rest }
}
