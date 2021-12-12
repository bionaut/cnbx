import { Currency, CurrencyList } from './cnb-types'

/**
 * Transforms pipe separated values to formatted JSON
 * @param input
 */
export function txtToJSON(input?: string): CurrencyList {
  if (!input || input.length === 0) {
    return []
  }

  return input.split('\n').slice(2).map(transformRow)
}

/**
 * Transforms response row into a usable object
 * @param input
 */
export function transformRow(input: string): Currency {
  const [country, name, amount, symbol, value] = input.split('|')
  const rate = parseFloat(value) / parseFloat(amount)
  return {
    country,
    name,
    symbol,
    rate,
  }
}
