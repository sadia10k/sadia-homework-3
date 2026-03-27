import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
import Controls from "./components/Controls";
import MovieGrid from "./components/MovieGrid";
import Pagination from "./components/Pagination";
import { Movie } from "./types";

const API_KEY = "0ad622d81c8d817f2ebb03a828112b2a";
const BASE_URL = "https://api.themoviedb.org/3";

const App: React.FC = () => {
  const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentSort, setCurrentSort] = useState("");

  const fetchMovies = useCallback(async () => {
    let url;
    if (currentQuery) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        currentQuery
      )}&page=${currentPage}`;
    } else {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${currentPage}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setCurrentMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [currentQuery, currentPage]);

  useEffect(() => {
    fetchMovies();
    window.scrollTo(0, 0);
  }, [fetchMovies]);

  const handleSearch = useCallback((query: string) => {
    setCurrentQuery(query);
    setCurrentPage(1); // Reset to page 1 on new search
  }, []);

  const handleSortChange = useCallback((sortVal: string) => {
    setCurrentSort(sortVal);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  // Sort movies locally over the current page results
  const getSortedMovies = () => {
    let sorted = [...currentMovies];
    if (currentSort === "release_asc") {
      sorted.sort(
        (a, b) =>
          new Date(a.release_date || 0).getTime() -
          new Date(b.release_date || 0).getTime()
      );
    } else if (currentSort === "release_desc") {
      sorted.sort(
        (a, b) =>
          new Date(b.release_date || 0).getTime() -
          new Date(a.release_date || 0).getTime()
      );
    } else if (currentSort === "rating_asc") {
      sorted.sort((a, b) => a.vote_average - b.vote_average);
    } else if (currentSort === "rating_desc") {
      sorted.sort((a, b) => b.vote_average - a.vote_average);
    }
    return sorted;
  };

  return (
    <>
      <header className="top-header">
        <h1>Movie Explorer</h1>
      </header>

      <Controls
        onSearch={handleSearch}
        onSortChange={handleSortChange}
        currentSort={currentSort}
      />

      <MovieGrid movies={getSortedMovies()} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default App;
