import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";

function getLocalStorage(key) {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    return JSON.parse(localStorage.getItem(key));
  }
}

function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [isWatching, setIsWatching] = useState(
    () => getLocalStorage("isWatching") ?? []
  );

  function addSeriesHandler(series) {
    setIsWatching([series, ...isWatching]);
  }

  function removeSeriesHandler(series) {
    setIsWatching(isWatching.filter((entry) => entry.id !== series.id));
  }

  useEffect(() => {
    setLocalStorage("isWatching", isWatching);
  }, [isWatching]);

  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component
          {...pageProps}
          addSeriesHandler={addSeriesHandler}
          removeSeriesHandler={removeSeriesHandler}
          isWatching={isWatching}
        />
      </SessionProvider>
    </>
  );
}

export default MyApp;
