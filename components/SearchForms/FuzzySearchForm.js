import styled from "styled-components";
import { Searchbar } from "../Searchbar/Searchbar";
import { SeriesCard } from "../SeriesCard/SeriesCard";

export function FuzzySearchForm({
  searchTermHandler,
  searchData,
  placeholder,
}) {
  return (
    <>
      <Searchbar
        searchTermHandler={searchTermHandler}
        placeholder={placeholder}
      />
      {searchData ? (
        <StyledDiv>
          {searchData.map((series) => (
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
  gap: 1rem;
  margin-bottom: 3.5rem;
`;
