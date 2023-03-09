import { useEffect, useRef, useState } from 'react'
import "./App.css"
import { Movies } from './components/Movies'
import { useMovies} from './hooks/useMovies'


 function useSearch(){
   
   
   const [search, updateSearch ] = useState ("")
  const [error, setError ] = useState (null)
  const isFirstInput = useRef(true)

  useEffect(()=>{  // parametros para validar informacion del input
  
    if (isFirstInput?.current) {
      isFirstInput.current = search === ''
      return
    }
    
    if(search === ""){
      setError("no se puede buscar una  pelicula vacia")
      return
    }
    if(search?.length < 3){
      setError("la busqueda debe tener almenos 3 caracteres")
      return
    }
  
    setError(null)
  }, [search])
  
  return {search, updateSearch, error}

 }


function App() {
  
  const [sort, setSort ] = useState (false)   //nos indica por nombre laspeliculas
  const { search, updateSearch, error } = useSearch()
  const {movies,getMovies,loading} = useMovies({search, sort})



const handleSubmit = (event) => { 
  event.preventDefault() 
  getMovies({search})
  
}

const handleChange = (event) => {
  const newSearch = event.target.value
  updateSearch(newSearch)
}

const handleSort = () => {
  setSort(!sort) //lo que va ha cambiar en el sort 
}

useEffect(()=>{
  console.log("newgetMovies")
},[getMovies])


  return (
    <div className='page'> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit} >  
           <input onChange={handleSort}  type = "checkbox" checked ={sort} />  {/*onChange cada vez que el input cambie */}
           <input onChange={handleChange} value={search} name='search'  placeholder='peliculas' />  {/*onChange cada vez que el input cambie */}
          <button type='submit'> Buscar </button>
        </form>
        {error && <p style={{ color: "red", }}> {error} </p>}
      </header>

      <main>
       {
        loading ? <p>cargando...</p> : <Movies movies={movies}/>
       }
       
      </main>
           
            
    </div>

  )
}

export default App


