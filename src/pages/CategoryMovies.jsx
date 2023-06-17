import Header from "../components/common/Header";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import { categoryMovies } from "../services/api";
import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, moviesType } from '../constants/constant';
import { useLocation } from 'react-router-dom';
import { Box , styled ,Typography,Divider } from "@mui/material";
import MoviesList from "../components/MoviesList";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const CategoryMovies = () => {

    const [movies, setMovies] = useState([]);

    const { search } = useLocation();

    useEffect(() => {
        const getData = async (API_URL) => {
          let response = await categoryMovies(API_URL);
          setMovies(response.results);
        };


        let API_URL = '';

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('upcoming')) {
            API_URL = UPCOMING_API_URL;
        } else if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        }

        getData(API_URL);
    }, [search]);

      

const StyledBanner = styled('img')({
    height : 450,
    width: '100%'
});

const Component = styled(Box)`
    width: 50%;
    margin: auto;
    // padding : 0px 100px;
`;

const Container = styled(Box)`
    // background: #F5F5F5;
    text-align: left;
    padding: 10px;
`


  return (
    <>
      <Header />
      <Component>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {movies.map((movie) => (
            <>
              <StyledBanner
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </>
          ))}
        </Carousel>
        <Container>
                    <Typography variant="h6">IMDb Charts</Typography>
                    <Typography style={{ fontWeight : 700}} variant="h4">IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{ fontSize: 12, margin: 5  }}>IMDb Top {movies.length} as determined by IMDb Users</Typography>
                    <Divider />
                    <MoviesList movies={movies} />
                </Container>
      </Component>
    </>
  );
};

export default CategoryMovies;
