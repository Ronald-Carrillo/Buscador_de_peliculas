import { useState } from 'react'
import {searchMovies} from '../services/movies'



export function useMovies ({search}){ // canston hook hacer el fetch de los datos
const [movies, setMovies ]= useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

 

const getMovies = async () => {  // forma de  recuperar las peliculas

    try{
      setLoading(true)
      const newMovies = await searchMovies({search})
      setMovies(newMovies)
      console.log(newMovies)

    }catch(e) {
      setMovies(e.message)

    }finally{
      setLoading(false)
    }

  }
  return { movies, getMovies, loading}
}