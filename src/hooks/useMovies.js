import responsiveMovies from '../mocks/with_results.json'
// import noResults from './mocks/no_results.json'


export function useMovies (){ // canston hook hacer el fetch de los datos
    const movies = responsiveMovies.Search
    const mappedMovies = movies.map(movie => ({  //mapear los datos desde un punto para controlar el contrato de la api 
      id: movie.imdbID,
      title: movie.Title,
      years: movie.Year,
      poster: movie.Poster,
    })) //decide la tranformacion de los datos de la api
    
    return { movies: mappedMovies}
  }