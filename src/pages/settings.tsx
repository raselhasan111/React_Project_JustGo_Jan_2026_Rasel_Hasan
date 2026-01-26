import { CurrencySettings } from '../features/settings/components/currency-settings'

function Settings() {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <CurrencySettings />
    </div>
  )
}

export default Settings
