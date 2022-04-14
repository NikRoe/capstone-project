import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";

const fetcher = (url) => fetch(url).then((response) => response.json());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const {
    data: isWatching,
    error,
    mutate,
  } = useSWR(`/api/watchedSeries`, fetcher);

  const [seriesIsEditing, setSeriesIsEditing] = useState(false);

  async function addSeriesHandler(series) {
    setSeriesIsEditing(true);
    handleSeriesEdit(series);
  }

  function removeSeriesHandler(series) {
    setSeriesIsEditing(true);
    handleSeriesDelete(series);
  }

  async function handleSeriesEdit(series) {
    const response = await fetch(`/api/watchedSeries/${series.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ series: series }),
    });
    const createdSeries = await response.json();
    if (response.ok) {
      setSeriesIsEditing(false);
      mutate();
    } else {
      alert("Something went wrong");
    }
  }

  async function handleSeriesDelete(series) {
    const response = await fetch(`/api/watchedSeries/${series.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ series: series }),
    });
    if (response.ok) {
      setSeriesIsEditing(false);
      mutate();
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
          seriesIsEditing={seriesIsEditing}
        />
      </SessionProvider>
    </>
  );
}

export default MyApp;
