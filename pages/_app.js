import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
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

const fetcher = (url) => fetch(url).then((response) => response.json());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // const [isWatching, setIsWatching] = useState(
  //   () => getLocalStorage("isWatching") ?? []
  // );

  const { data: isWatching, error } = useSWR(`/api/watchedSeries`, fetcher);

  console.log(isWatching);

  async function addSeriesHandler(series) {
    // setIsWatching([series, ...isWatching]);
    handleEdit(series);
  }

  function removeSeriesHandler(series) {
    // setIsWatching(isWatching.filter((entry) => entry.id !== series.id));
    handleDelete(series);
  }

  // useEffect(() => {
  //   setLocalStorage("isWatching", isWatching);
  // }, [isWatching]);

  async function handleEdit(series) {
    const response = await fetch(`/api/watchedSeries/${series.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ series: series }),
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
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ series: series }),
    });
    if (response.ok) {
      alert("it worked!");
    } else {
      alert("Something went wrong");
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
