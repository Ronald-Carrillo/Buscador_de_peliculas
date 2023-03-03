import { useState } from 'react'
import withResults from '../mocks/with_results.json'
import noResults from '../mocks/no-results.json'


export function useMovies ({search}){ // canston hook hacer el fetch de los datos
const [responseMovies, setResponseMovies ]= useState([])
console.log(responseMovies)
const movies = responseMovies.Search


const mappedMovies = movies?.map(movie => ({  //mapear los datos desde un punto para controlar el contrato de la api 
      id: movie.imdbID,
      title: movie.Title,
      years: movie.Year,
      poster: movie.Poster,
    })) //decide la tranformacion de los datos de la api
    

const getMovies = () => {
      if(search){
         fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${search}`)  
        .then (res => res.json())
        .then (json => {
          setResponseMovies(json)
        })
        
      }else{
        setResponseMovies(noResults)
    }
    }
    return { movies: mappedMovies, getMovies}
  }