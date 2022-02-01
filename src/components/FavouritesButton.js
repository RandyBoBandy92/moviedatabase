import { useContext } from "react";
import { GlobalContext } from "../GlobalState";

const FavouritesButton = ({ movieData }) => {
  // this button will take in the id of the movie it is being rendered by
  // it will then draw in the entire favourites context and necessary actions
  // conditionally display different text based on whether the movie
  // is or is not favourites
  // and it will handle clicks to either add/remove a movie from favourites

  const { favourites, addFavourite, delFavourite } = useContext(GlobalContext);

  
  const isFavourited = () => {
    const movieInFavourites = favourites.filter(
      (favourite) => favourite.id === movieData.id
    );
    if (movieInFavourites.length > 0) {
      // movie already exists
      return true;
    } else {
      return false;
    }
  };

  const handleClick = () => {
    if (isFavourited()) {
      delFavourite(movieData);
    } else {
      addFavourite(movieData);
    }
  };

  return (
    <>
      {isFavourited() ? (
        <div className="favourite fav-active-container" onClick={handleClick}>
          <svg
            className="fav-svg"
            viewBox="0 0 1024 1024"
            height="32px"
            width="32px"
          >
            <path
              className="fav-icon-path fav-active"
              d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.  "
            ></path>
          </svg>
        </div>
      ) : (
        <div className="favourite fav-unactive-container" onClick={handleClick}>
          <svg
            className=" nofav-svg"
            viewBox="0 0 1024 1024"
            height="32px"
            width="32px"
          >
            <path
              className="fav-icon-path"
              d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.  "
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default FavouritesButton;
