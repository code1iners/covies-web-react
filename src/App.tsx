import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TvPage from "./pages/TvPage";
import SearchPage from "./pages/SearchPage";
import MainHeader from "./components/headers/MainHeader";
import MoviePage from "./pages/movies/MoviePage";
import Footer from "./components/footers";

function App() {
  console.log("hello", process.env.NODE_ENV);
  return (
    <Router>
      <MainHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies" element={<MoviePage />} />

        <Route path="/tv" element={<TvPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
