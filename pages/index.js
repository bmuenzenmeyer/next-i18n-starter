import { useRouter } from "next/router"

import Header from "@components/Header"
import rosetta from "../content/translations"

export default function Home() {
  const { locale } = useRouter()
  const t = rosetta(locale)

  return <Header title={t.hello} />
}
