import styled from "styled-components";
import { Searchbar } from "../Searchbar/Searchbar";
import { SeriesCard } from "../SeriesCard/SeriesCard";

export function FetchSearchForm({
  searchTermHandler,
  searchData,
  searchTerm,
  placeholder,
}) {
  return (
    <>
      <Searchbar
        searchTermHandler={searchTermHandler}
        placeholder={placeholder}
      />
      {searchTerm ? (
        searchData ? (
          searchData.data.results.length === 0 ? (
            <div>We found no series matching your search</div>
          ) : (
            <StyledDiv>
              {searchData.data.results.map((series) => (
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
