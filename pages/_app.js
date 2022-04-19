import Head from "next/head"

import "@styles/globals.css"
import Nav from "@components/Nav"

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Site</title>
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default Application
