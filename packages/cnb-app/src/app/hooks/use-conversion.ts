import { useCnbCurrencies } from '@cnb/cnb-client'
import { useState } from 'react'
import NP from 'number-precision'

export const useConversion = () => {
  const [result, setResult] = useState<number | string>('')
  const { data } = useCnbCurrencies()

  const convert = (symbol: string, amount: number) => {
    const rate = data.find(({ symbol: s }) => s === symbol)
    if (!amount || !symbol) {
      setResult('')
    } else if (rate) {
      setResult(NP.times(parseFloat(rate.rate), amount).toString())
    }
  }

  return [result, convert] as [number, typeof convert]
}
