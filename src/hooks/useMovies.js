import { useRef, useState } from 'react'
import {searchMovies} from '../services/movies'



export function useMovies ({search,sort}){ // canston hook hacer el fetch de los datos
const [movies, setMovies ]= useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const previousSearch = useRef(search) // guardamos la referencia y no cambia al rederizado  
 

const getMovies = async () => {  // forma de  recuperar las peliculas

  if(search === previousSearch.current) return 

    try{
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({search})
      setMovies(newMovies)

    }catch(e) {
      setError(e.message)

    }finally{
      setLoading(false)
    }

  }

  const sortedMovies = sort 
  ?[...movies].sort((a,b) => a.title.localeCompare(b.title)) // el sort compara entre a y b  localeCompare compara con acentos 
  : movies
  return { movies: sortedMovies , getMovies, loading}
}