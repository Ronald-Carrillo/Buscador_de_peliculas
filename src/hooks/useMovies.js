import { useState } from 'react'
import withResults from '../mocks/with_results.json'
import noResults from '../mocks/no-results.json'


export function useMovies ({search}){ // canston hook hacer el fetch de los datos
const [responseMovies, setResponseMovies ]= useState([])

const movies = responseMovies.Search


const mappedMovies = movies?.map(movie => ({  //mapear los datos desde un punto para controlar el contrato de la api 
  id: movie.imdbID,
  title: movie.Title,
  years: movie.Year,
  poster: movie.Poster,
})) //decide la tranformacion de los datos de la api


const getMovies = () => {
      if(search){
        setResponseMovies(withResults)
      }else{
        setResponseMovies(noResults)
      }
    }
    return { movies: mappedMovies, getMovies}
  }