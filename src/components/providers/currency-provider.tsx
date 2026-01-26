import { useState, type ReactNode } from 'react'
import {
  CURRENCY_SYMBOLS,
  CurrencyContext,
  type Currency,
} from '../../context/currency-context'

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD')

  const value = {
    currency,
    setCurrency,
    symbol: CURRENCY_SYMBOLS[currency],
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}
