import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviePage";
import Workshop from "../Workshop";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="workshop" exact element={<Workshop />} />
        <Route path="/movie/:id" exact element={<MoviePage />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
