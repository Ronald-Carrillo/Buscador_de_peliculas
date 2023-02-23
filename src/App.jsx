import { useState } from 'react'
import "./App.css"
import { Movies } from './components/Movies'
import { useMovies} from './hooks/useMovies'





function App() {
  
const {movies} = useMovies()

  return (
    <div className='page'> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='peliculas' />
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
