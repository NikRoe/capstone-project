import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import { Navbar } from "../components/Navbar/Navbar";
import { FetchSearchForm } from "../components/SearchForms/FetchSearchForm";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Search() {
  const [searchTerm, setSearchTerm] = useState();
  const { data, error } = useSWR(
    `/api/getSeriesBySearch/${searchTerm}`,
    fetcher
  );

  function searchTermHandler(searchInput) {
    setSearchTerm(searchInput);
  }

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div role={"main"}>
        <h1>Search</h1>
        <FetchSearchForm
          searchTermHandler={searchTermHandler}
          searchData={data}
          searchTerm={searchTerm}
          placeholder={`e.g. Game of Thrones`}
        />
        <Navbar />
      </div>
    </>
  );
}
