import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { Navbar } from "../components/Navbar/Navbar";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";

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
      <Searchbar searchTermHandler={searchTermHandler} />
      {searchTerm ? (
        data ? (
          data.data.results.length === 0 ? (
            <div>We found series no matching your search</div>
          ) : (
            <StyledDiv>
              {data.data.results.map((series) => (
                <SeriesCard key={series.id} series={series}></SeriesCard>
              ))}
            </StyledDiv>
          )
        ) : (
          <div>loading</div>
        )
      ) : (
        <div>Enter search term to find new and exciting series!</div>
      )}
      <Navbar />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`;
