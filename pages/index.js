import Head from "next/head";

import translations from "../content/translations";

export default function Home({ t }) {
  return (
    <>
      <Head>
        <title>{t?.nav?.home}</title>
      </Head>
      {t?.welcome}
    </>
  );
}

export async function getStaticProps(context) {
  const translation = await translations(context.locale);
  return {
    props: {
      t: translation,
    },
  };
}
