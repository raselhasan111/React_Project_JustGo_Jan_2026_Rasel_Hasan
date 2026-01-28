import { createContext } from 'react'

export type Currency = 'USD' | 'GBP' | 'EUR'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  symbol: string
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
)

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  GBP: '£',
  EUR: '€',
}
