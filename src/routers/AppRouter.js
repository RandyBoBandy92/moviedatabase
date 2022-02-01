import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../GlobalState";
import FavouritesPage from "../pages/Favourites";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviePage";
import About from "../pages/About";
import SearchPage from "../pages/SearchPage";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { APP_FOLDER_NAME } from "../utilities/constants";


const AppRouter = () => {
  return (
    <BrowserRouter basename={APP_FOLDER_NAME}>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/search/:query" exact element={<SearchPage />} />
          <Route path="/movie/:id" exact element={<MoviePage />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/favourites" exact element={<FavouritesPage />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
