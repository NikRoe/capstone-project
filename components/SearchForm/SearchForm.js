import styled from "styled-components";
import { Searchbar } from "../Searchbar/Searchbar";
import { SeriesCard } from "../SeriesCard/SeriesCard";

export function SearchForm({ searchTermHandler, searchList }) {
  return (
    <>
      <Searchbar searchTermHandler={searchTermHandler} />
      {searchList ? (
        <StyledDiv>
          {searchList.map((series) => (
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
