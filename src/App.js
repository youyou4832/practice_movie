import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  async getMovies() {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ isLoading: false, movies });
    console.log(this.state.movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                poster={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                summary={movie.summary}
              ></Movie>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
