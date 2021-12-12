export enum CnbQuery {
  rates = 'rates',
}

export interface Currency {
  name: string
  country: string
  symbol: string
  rate: string
}

export type CurrencyList = Currency[]
