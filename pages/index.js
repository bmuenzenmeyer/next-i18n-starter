import rosetta from "../content/translations"

export default function Home({ translations }) {
  return <>{translations.welcome}</>
}

export async function getStaticProps(context) {
  console.log(16, context)

  const translations = await rosetta(context.locale)
  console.log(14, translations)
  return {
    props: {
      translations,
    }, // will be passed to the page component as props
  }
}
