import { useMemo, useRef, useState } from 'react'
import {searchMovies} from '../services/movies'



export function useMovies ({search,sort}){ // canston hook hacer el fetch de los datos
const [movies, setMovies ]= useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const previousSearch = useRef(search) // guardamos la referencia y no cambia al rederizado  
 

const getMovies = useMemo(()=>{
  return async ({search}) => {  // le insertamos el search como parametro para no depender del search global 
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
},[]) 
  const sortedMovies = useMemo(() => {
    return   sort 
  ?[...movies].sort((a,b) => a.title.localeCompare(b.title)) // el sort compara entre a y b  localeCompare compara con acentos 
  : movies
  },[sort,movies])  // dependencias que tenga en cuenta cada vez que cambie o se haga un calculo 

  return { movies: sortedMovies , getMovies, loading}
}