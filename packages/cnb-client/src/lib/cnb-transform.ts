import { Currency, CurrencyList } from './cnb-types'
import NP from 'number-precision'

/**
 * Transforms pipe separated values to formatted JSON
 * @param input
 */
export function txtToJSON(input?: string): CurrencyList {
  if (!input || input.length === 0) {
    return []
  }

  return input
    .split('\n')
    .slice(2)
    .reduce<CurrencyList>((acc, row) => {
      if (row.length > 1) {
        return [...acc, transformRow(row)]
      }
      return acc
    }, [])
}

/**
 * Transforms response row into a usable object
 * @param input
 */
export function transformRow(input: string): Currency {
  const [country, name, amount, symbol, value] = input.split('|')

  const parsedRate = parseFloat(value.replace(',', '.'))
  const parsedAmount = parseFloat(amount)

  if (!parsedRate) {
    throw new Error('Rate can not be parsed!')
  }

  const rate = NP.divide(parsedRate, parsedAmount).toString()
  return {
    country,
    name,
    symbol,
    rate,
  }
}
