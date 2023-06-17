import { Box, Typography, styled } from "@mui/material";

/// lets add some style to box ,image text etc.
const Outerbox = styled(Box)`

width: 40%;
display: flex;
flex-direction: column;
align-items: baseline;
padding-left: 20px;
& > p {
    color: #F5C518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
}
`
const Boxedit = styled(Box)`
color: #FFFFFF;
display: flex;
& > p {
    margin-left: 20px;
}
`

const Imgedit = styled('img')({

    width:88
})


const Upnext = ({ movies }) => {
  return (
    <Outerbox>
      <Typography>UpNext</Typography>
      {movies.splice(0, 3).map((movie) => (
        <Boxedit>
            <Imgedit src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"/>
            <Typography>{movie.original_title}</Typography>
        </Boxedit>
      ))}
    </Outerbox>
  );
};

export default Upnext;
