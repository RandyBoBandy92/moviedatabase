import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { render } from "@testing-library/react";

const MoviesContainer = ({ title, movies, flex = false }) => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 6,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    // swipeToSlide: true,
    swipe: true,
    draggable: true,
    infinite: true,
    // had to change this from true to some boolean logic
    // if not, when the user only has 1 favourite
    // it will clone it and show the same movie twice.
    speed: 500,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
          arrows: true,
        },
      },
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
          arrows: true,
        },
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 8,
          arrows: true,
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 7,
          arrows: true,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
          arrows: true,
        },
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };

  const renderLoadingCards = () => {
    const loadingCards = [];
    for (let index = 0; index < settings.slidesToShow; index++) {
      loadingCards.push(<MovieCard key={index} data={""} />);
    }
    return loadingCards;
  };

  if (flex) {
    return (
      <>
        {title && <h2>{title}</h2>}
        <div className="movies-container movies-flexed">
          {movies
            ? movies.map((movie, index) => (
                <MovieCard key={index} data={movie} />
              ))
            : renderLoadingCards()}
        </div>
      </>
    );
  }

  return (
    <div className="movies-container">
      <h2>{title}</h2>
      {movies ? (
        <Slider {...settings}>
          {movies.map((movieData, index) => (
            <MovieCard key={index} data={movieData} />
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>{renderLoadingCards()}</Slider>
      )}
    </div>
  );
};

export default MoviesContainer;
