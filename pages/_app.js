import Head from "next/head"

import "@styles/globals.css"
import Nav from "@components/Nav"

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
      </Head>
      <Nav />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default Application
