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

  async function addSeriesHandler(series) {
    setIsWatching([series, ...isWatching]);
    handleCreate(series);
  }

  function removeSeriesHandler(series) {
    setIsWatching(isWatching.filter((entry) => entry.id !== series.id));
    handleDelete(series);
  }

  useEffect(() => {
    setLocalStorage("isWatching", isWatching);
  }, [isWatching]);

  async function handleCreate(series) {
    const response = await fetch("/api/watchedSeries", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ series: series.id }),
    });
    const createdSeries = await response.json();
    if (response.ok) {
      alert("it worked!");
    } else {
      alert("Something went wrong");
    }
  }

  async function handleDelete(series) {
    const response = await fetch(`/api/watchedSeries/${series.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("it worked");
    } else {
      console.log("nope, try again");
    }
  }

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
