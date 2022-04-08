import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { Navbar } from "../components/Navbar/Navbar";
import { SWRSearchForm } from "../components/SearchForms/SWRSearchForm";

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
      <h1>Search</h1>
      <SWRSearchForm
        searchTermHandler={searchTermHandler}
        searchData={data}
        searchTerm={searchTerm}
        placeholder={`e.g. Game of Thrones`}
      />
      <Navbar />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`;
