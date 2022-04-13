import { SessionProvider } from "next-auth/react";
import useSWR from "swr";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";

const fetcher = (url) => fetch(url).then((response) => response.json());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { data: isWatching, error } = useSWR(`/api/watchedSeries`, fetcher);

  async function addSeriesHandler(series) {
    handleSeriesEdit(series);
  }

  function removeSeriesHandler(series) {
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
      alert("it worked!");
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
