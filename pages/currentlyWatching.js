import Head from "next/head";
import styled from "styled-components";
import { Navbar } from "../components/Navbar/Navbar";
import { SeriesCard } from "../components/SeriesCard/SeriesCard";
import { Delayed } from "../lib/Delayed";
import { search } from "fast-fuzzy";
import { useState } from "react";
import { FuzzySearchForm } from "../components/SearchForms/FuzzySearchForm";

export default function CurrentlyWatching({ isWatching }) {
  const [searchList, setSearchList] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchbarChange(searchInput) {
    setSearchList(
      search(searchInput, isWatching, { keySelector: (obj) => obj.name })
    );
    setSearchTerm(searchInput);
  }

  return (
    <Delayed>
      <Head>
        <title>Currently Watching</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Currently Watching</h1>
      {isWatching.length === 0 ? (
        <p>
          You did not add any series to your currently Watching List yet. To do
          so, go to any series and click on &#34;Add to currently watching&#34;
          &#58;&#41;{" "}
        </p>
      ) : isWatching.length > 0 ? (
        <>
          <FuzzySearchForm
            searchTermHandler={onSearchbarChange}
            searchData={searchList}
            placeholder={`e.g. ${isWatching[0].name}`}
          />

          {searchTerm.length > 0 && <div>No matching results were found</div>}

          {searchList.length === 0 && searchTerm.length === 0 ? (
            <StyledDiv>
              {isWatching.map((series) => (
                <SeriesCard key={series.id} series={series}></SeriesCard>
              ))}
            </StyledDiv>
          ) : null}
        </>
      ) : (
        <div>loading</div>
      )}
      <Navbar />
    </Delayed>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3.5rem;
`;
