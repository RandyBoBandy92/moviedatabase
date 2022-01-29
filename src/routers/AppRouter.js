import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../GlobalState";
import FavouritesPage from "../pages/Favourites";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviePage";
import About from "../pages/About";
import Workshop from "../Workshop";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="workshop" exact element={<Workshop />} />
          <Route path="/movie/:id" exact element={<MoviePage />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/favourites" exact element={<FavouritesPage />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
