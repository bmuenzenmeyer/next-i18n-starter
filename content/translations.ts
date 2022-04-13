import config from '../next.config'

const locales = config.i18n.locales

const translations = Promise.all(locales.map(async locale =>  {
  const l = await require(`./${locale}/translation`).default
  console.log(7, {l})
  return l
}))


const translate = async (locale) => {
  console.log(13, {translations})
  return await translations[locale]
}

module.exports = async (locale) => {
  console.log(17, locale)
  const rosetta = await translate(locale)
  console.log(18, {rosetta})
  return rosetta
}
