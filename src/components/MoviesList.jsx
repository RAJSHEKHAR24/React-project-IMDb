import { Box, Typography, List, ListItem, styled } from "@mui/material";
import { Star } from '@mui/icons-material';

const Banner = styled("img")({
  width: 100,

});
const Container = styled(List)`
  display: flex;
  
//   background-color:gold;
  
`;
const Typography1 = styled(Typography)`
color:white;


`
const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Container>
          <ListItem>
            <Banner
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </ListItem>
          <ListItem>
            <Typography1>{movie.original_title}</Typography1>
          </ListItem>
          <ListItem>
            <Star color="warning" />
            <Typography1>{movie.vote_average}</Typography1>
          </ListItem>
          <ListItem>
            <Typography1>{movie.release_date}</Typography1>
          </ListItem>
        </Container>
      ))}
    </>
  );
};
export default MoviesList;
