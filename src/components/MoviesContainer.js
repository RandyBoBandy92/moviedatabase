import Slider from "react-slick";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ title, movies }) => {

  const settings = {
    dots: false,
    arrows: false,
    // swipeToSlide: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const renderLoadingCards = () => {
      const loadingCards = []
      for (let index = 0; index < settings.slidesToShow; index++) {
          loadingCards.push(<MovieCard key={index} data={""}/>)
      }
      return loadingCards
  }
  

  return (
    <div className="movies-container" style={{}}>
      <h2>{title}</h2>
      {movies ? (
        <Slider {...settings}>
          {movies.map((movieData, index) => (
            <MovieCard key={index} data={movieData} />
          ))}
        </Slider>
      ) : (
        <Slider {...settings} >
            {renderLoadingCards()}
        </Slider>
      )}
    </div>
  );
};

export default MoviesContainer;
