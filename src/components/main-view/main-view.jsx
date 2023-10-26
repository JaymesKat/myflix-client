import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Pulp Fiction",
      description: "Vincent Vega and Jules Winnfield are hitmen with a penchant for philosophical discussion. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace and his actress wife, Mia.",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      director: "Quentin Tarantino",
      genre: "Crime"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "In Earths future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earths population to a new home via a wormhole..",
      image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      director: "Christopher Nolan",
      genre: "Adventure"
    },
    {
      id: 3,
      title: "Goodfellas",
      description: "A young man grows up in the mob and works very hard to advance through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes.",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
      director: "Martin Scorsese",
      genre: "Crime"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
