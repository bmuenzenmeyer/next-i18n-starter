import {i18n} from '../next.config'

const {locales} = i18n

const translate = async (locale) => {

  const translations = await Promise.all(
    locales.map(async locale =>  {
      const l = (await require(`./${locale}/translation`)).default
      return {
        locale,
        ...l
      }
    })
  )
  return translations.find((translation  => translation.locale === locale))
}

module.exports = async (locale) => {
  const translation = await translate(locale)
  return translation
}
