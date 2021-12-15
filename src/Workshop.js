import Slider from "react-slick";
import MovieCard from "./components/MovieCard";

const Workshop = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div >
      <h2>Workshop</h2>
      <MovieCard/>
    </div>
  );
};

export default Workshop;
