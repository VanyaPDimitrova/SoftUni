import MovieListItem from './MovieListItem';

/* eslint-disable react/prop-types */
function MovieList(props) {
    console.log(props);
  return (
    <>
      <h1> {props.title} </h1>

      <ul>
        <MovieListItem title={props.movies[0]} />
        <MovieListItem title={props.movies[1]} />
        <MovieListItem title={props.movies[2]} />
        <MovieListItem title={props.movies[3]} />
      </ul>
    </>
  );
}

export default MovieList;
