import "@styles/globals.css";
import Nav from "@components/Nav";

function Application({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default Application;
