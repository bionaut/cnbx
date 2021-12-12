import { transformRow, txtToJSON } from '../cnb-transform'

const response = `07.12.2021 #235
země|měna|množství|kód|kurz
Austrálie|dolar|1|AUD|16,081
Brazílie|real|1|BRL|4,022
Bulharsko|lev|1|BGN|13,020
Čína|žen-min-pi|1|CNY|3,554
Dánsko|koruna|1|DKK|3,425
EMU|euro|1|EUR|25,465
Filipíny|peso|100|PHP|44,857
Hongkong|dolar|1|HKD|2,902
Chorvatsko|kuna|1|HRK|3,385
Indie|rupie|100|INR|30,001`

describe('CNB response transforms', () => {
  test('should return default if empty', () => {
    expect(txtToJSON(undefined)).toEqual([])
    expect(txtToJSON('')).toEqual([])
  })

  test('should transform currencies into JSON', () => {
    const actual = txtToJSON(response)

    expect(actual).toHaveLength(10)
    actual.forEach((actualCurrency) => {
      expect(actualCurrency).toEqual(
        expect.objectContaining({
          rate: expect.any(Number),
          country: expect.any(String),
          symbol: expect.any(String),
          name: expect.any(String),
        }),
      )
    })
  })

  test('should ensure valid rate conversion', () => {
    const actual = txtToJSON(response)
    const peso = actual[6]
    expect(peso.rate).toEqual(0.44)
  })

  test('should transform single row', () => {
    const actual = transformRow('Indie|rupie|100|INR|30.1')
    expect(actual).toEqual({
      country: 'Indie',
      name: 'rupie',
      rate: 0.301,
      symbol: 'INR',
    })
  })
})
