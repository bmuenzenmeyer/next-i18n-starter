
import en from './en/translation'
import de from './de/translation'

const translations = {
  en,
  de,
}

const translate = (locale) => {
  return translations[locale]
}

module.exports = (locale) => {
  const rosetta = translate(locale)
  return rosetta
}
