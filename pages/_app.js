import { useState } from "react";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const [isWatching, setIsWatching] = useState([]);
  const [isActive, setIsActive] = useState(false);

  function addSeriesHandler(series) {
    setIsWatching([series, ...isWatching]);
    setIsActive(!isActive);
  }

  function removeSeriesHandler(series) {
    setIsWatching(isWatching.filter((entry) => entry.id !== series.id));
    setIsActive(!isActive);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        addSeriesHandler={addSeriesHandler}
        removeSeriesHandler={removeSeriesHandler}
        isWatching={isWatching}
        isActive={isActive}
      />
    </>
  );
}

export default MyApp;
