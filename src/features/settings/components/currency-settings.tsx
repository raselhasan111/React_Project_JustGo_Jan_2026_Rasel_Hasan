import { RadioGroup, type RadioOption } from '@/components/radio-group'
import { type Currency } from '@/context/currency-context'
import { useCurrency } from '@/hooks/use-currency'

export function CurrencySettings() {
  const { currency, setCurrency } = useCurrency()

  const options: RadioOption<Currency>[] = [
    { label: 'US Dollar ($)', value: 'USD' },
    { label: 'British Pound (£)', value: 'GBP' },
    { label: 'Euro (€)', value: 'EUR' },
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Currency Configurations
      </h2>
      <RadioGroup
        name="currency"
        options={options}
        value={currency}
        onChange={setCurrency}
        className="w-fit"
      />
    </div>
  )
}
