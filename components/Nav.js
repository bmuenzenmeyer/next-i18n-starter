import { useEffect, useState } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

import rosetta from "../content/translations"
import LocaleSwitcher from "@components/LocaleSwitcher"

export default function Nav() {
  const { locale } = useRouter()
  const t = rosetta(locale)
  const [translations, setTranslations] = useState({})

  useEffect(() => {
    const fetchTranslation = async () => {
      const ts = await t
      setTranslations(ts)
    }
    fetchTranslation()
  }, [locale])

  if (!translations) {
    return <>...</>
  }

  return (
    <nav>
      <Link href="/">
        <a>{translations?.nav?.home}</a>
      </Link>{" "}
      |{" "}
      <Link href="/hello">
        <a>{translations?.nav?.hello}</a>
      </Link>
      <LocaleSwitcher />
    </nav>
  )
}
