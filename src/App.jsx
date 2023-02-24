import { useRef, useState } from 'react'
import "./App.css"
import { Movies } from './components/Movies'
import { useMovies} from './hooks/useMovies'





function App() {
  
const {movies} = useMovies()
const inputRef = useRef()   // referencia de mi input
  


const handleSubmit = (event) => { 
  event.preventDefault()  
  const inputEl = inputRef.current
  const value  = inputEl.value
  console.log(value)
}




  return (
    <div className='page'> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit} >    // con el form onSubmit me engloba los elemntos y recuperar informacion
          <input  ref={inputRef} placeholder='peliculas' />
          <button type='submit'> Buscar </button>
        </form>
      </header>

      <main>
       <Movies movies={movies}/>
      </main>
           
            
    </div>

  )
}

export default App
