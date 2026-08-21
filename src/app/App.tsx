import { HomePage } from '@pages/home/HomePage'
import { LocaleProvider } from '@shared/i18n/LocaleContext'

export function App() {
  return (
    <LocaleProvider>
      <HomePage />
    </LocaleProvider>
  )
}
