import {i18n} from '../next.config'

const {locales} = i18n

const translate = async (locale) => {

  const translations = await Promise.all(
    locales.map(async locale =>  {
      const l = (await require(`./${locale}/translation`)).default
      console.log(7, {l})
      return {
        locale,
        ...l
      }
    })
  )
  console.log(13, {translations})
  return translations.find((translation  => translation.locale === locale))
}

module.exports = async (locale) => {
  const rosetta = await translate(locale)
  console.log(18, rosetta)
  return rosetta
}
