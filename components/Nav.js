import Link from "next/link"
import { useRouter } from "next/router"

import rosetta from "../content/translations"
import LocaleSwitcher from "@components/LocaleSwitcher"

export default function Home() {
  const { locale } = useRouter()
  const t = rosetta(locale)

  return (
    <nav>
      <Link href="/">
        <a>{t.home}</a>
      </Link>{" "}
      |{" "}
      <Link href="/hello">
        <a>{t.hello}</a>
      </Link>
      <LocaleSwitcher />
    </nav>
  )
}
