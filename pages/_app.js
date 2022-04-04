import { useState } from "react";
import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const [isWatching, setIsWatching] = useState([]);
  const [isActive, setIsActive] = useState(false);

  function clickHandler(series) {
    console.log("I was clicked");
    console.log(isWatching);
    setIsWatching([series, ...isWatching]);
    setIsActive(!isActive);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        clickHandler={clickHandler}
        isWatching={isWatching}
        isActive={isActive}
      />
    </>
  );
}

export default MyApp;
