import { useRouter } from "next/router"

import Header from "@components/Header"
import rosetta from "../content/translations"

export default async function Home() {
  const { locale } = useRouter()
  console.log(8, rosetta, locale)
  const t = await rosetta(locale)
  console.log(9, t)

  return <Header title={t.hello} />
}
