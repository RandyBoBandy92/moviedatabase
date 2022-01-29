import Slider from "react-slick";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => {

  const settings = {
    
    dots: false,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 4,
    // swipeToSlide: true,
    swipe: true,
    draggable: true,
    infinite: movies.length > 3,
    // had to change this from true to some boolean logic
    // if not, when the user only has 1 favourite
    // it will clone it and show the same movie twice.
    speed: 500,
    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
        }
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
    ]
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
