///here using use Effect to call api when page is laoded

import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";
import { Box, styled } from "@mui/material";
import Slides from "../components/Slide";


import Banner from "../components/Banner";
// importing UPNext
import Upnext from "../components/Upnext";

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Comp = styled(Box)`
  padding: 0 115px;

`;

const Home = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Comp>
        <Wrapper>
        <Banner movies={movies} />
        <Upnext movies={movies} />
        </Wrapper>
        <Slides movies={movies}/>
        <Slides movies={movies}/>
        <Slides movies={movies}/>
        <Slides movies={movies}/>

      </Comp>
    </>
  );
};
export default Home;
