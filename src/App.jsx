import { useRef, useState } from 'react'
import "./App.css"
import { Movies } from './components/Movies'
import { useMovies} from './hooks/useMovies'





function App() {
  
const {movies} = useMovies()


const handleSubmit = (event) => { 
  event.preventDefault() 
  const data = Object.fromEntries(new window.FormData(event.target) ) // propio formulario
  console.log(data)
}




  return (
    <div className='page'> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit} >    // con el form onSubmit me engloba los elemntos y recuperar informacion
          <input name='query'  placeholder='peliculas' />
          <input name='hello'  placeholder='peliculas' />
          <input name='bey'  placeholder='peliculas' />
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
