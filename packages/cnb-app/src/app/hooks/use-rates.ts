import { Currency, useCnbCurrencies } from '@cnb/cnb-client'

export const useRates = (symbols: string[]): [Currency[], boolean] => {
  const { data, isLoading } = useCnbCurrencies()
  const rates = data.filter(({ symbol }) => symbols.includes(symbol)) ?? []

  return [rates, isLoading]
}
