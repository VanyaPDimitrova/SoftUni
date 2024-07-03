import './App.css'
import MovieList from './Components/MovieList';

function App() {
  const movies = [
    'The Matrix',
    'Man of steel',
    'Lord of the rings',
    'Case for Christ',
  ];

  return (
    <>
      <MovieList movies={movies} title='My movies' />
    </>
  )
}

export default App;
