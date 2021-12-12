export enum CnbQuery {
  rates = 'rates',
}

export interface Currency {
  name: string
  country: string
  symbol: string
  rate: number
}

export type CurrencyList = Currency[]
