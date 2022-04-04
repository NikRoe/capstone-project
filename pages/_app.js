import { useState } from "react";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const [isWatching, setIsWatching] = useState([]);

  function clickHandler(series) {
    console.log("I was clicked");
    console.log(isWatching);
    setIsWatching([series, ...isWatching]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        clickHandler={clickHandler}
        isWatching={isWatching}
      />
    </>
  );
}

export default MyApp;
