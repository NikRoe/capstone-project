import { useState } from "react";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const [isWatching, setIsWatching] = useState([]);

  function addSeriesHandler(series) {
    setIsWatching([series, ...isWatching]);
  }

  function removeSeriesHandler(series) {
    setIsWatching(isWatching.filter((entry) => entry.id !== series.id));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        addSeriesHandler={addSeriesHandler}
        removeSeriesHandler={removeSeriesHandler}
        isWatching={isWatching}
      />
    </>
  );
}

export default MyApp;
