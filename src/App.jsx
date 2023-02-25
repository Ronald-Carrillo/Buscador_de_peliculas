import { useEffect, useRef, useState } from 'react'
import "./App.css"
import { Movies } from './components/Movies'
import { useMovies} from './hooks/useMovies'





function App() {
  
const {movies} = useMovies()
const [query, setQuery ] = useState ()
const [error, setError ] = useState ()
console.log("query")


const handleSubmit = (event) => { 
  event.preventDefault() 
  console.log({query}) 
}

const handleChange = (event) => {
setQuery(event.target.value)
 
}

useEffect(()=>{  // parametros para validar informacion delinput
  if(query === ""){
    setError("no se puede buscar una  pelicula vacia")
    return
  }
  if(query?.length < 3){
    setError("la busqueda debe tener almenos 3 caracteres")
    return
  }

  setError(null)
}, [query])



  return (
    <div className='page'> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit} >   
           <input onChange={handleChange} value={query} name='query'  placeholder='peliculas' />  {/*onChange cada vez que el input cambie */}
          <button type='submit'> Buscar </button>
        </form>
        {error && <p style={{ color: "red", }}> {error} </p>}
      </header>

      <main>
       <Movies movies={movies}/>
      </main>
           
            
    </div>

  )
}

export default App
