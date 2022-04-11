import styled from "styled-components";
import { Searchbar } from "../Searchbar/Searchbar";
import { SeriesCard } from "../SeriesCard/SeriesCard";

export function FuzzySearchForm({
  searchTermHandler,
  searchData,
  placeholder,
  searchTerm,
  isWatching,
}) {
  return (
    <>
      <Searchbar
        searchTermHandler={searchTermHandler}
        placeholder={placeholder}
      />
      {searchData.length !== 0 ? (
        <StyledDiv>
          {searchData.map((series) => (
            <SeriesCard key={series.id} series={series}></SeriesCard>
          ))}
        </StyledDiv>
      ) : searchTerm.length > 0 && searchData.length === 0 ? (
        <div>No matching results were found</div>
      ) : searchData.length === 0 && searchTerm.length === 0 ? (
        <StyledDiv>
          {isWatching.map((series) => (
            <SeriesCard key={series.id} series={series}></SeriesCard>
          ))}
        </StyledDiv>
      ) : null}
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
`;
