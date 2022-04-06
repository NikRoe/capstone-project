import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { Navbar } from "../components/Navbar/Navbar";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";
import { MagnifyingGlass } from "../MagnifyingGlass";

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
      <h1>Search</h1>
      <Searchbar searchTermHandler={searchTermHandler} />
      {searchTerm ? (
        data ? (
          <StyledDiv>
            {data.data.results.map((series) => (
              <SeriesCard key={series.id} series={series}></SeriesCard>
            ))}
          </StyledDiv>
        ) : (
          <div>loading</div>
        )
      ) : (
        <div>Enter a search term to find new and exciting series!</div>
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
