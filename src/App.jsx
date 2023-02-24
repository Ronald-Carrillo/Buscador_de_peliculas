import { useRef, useState } from 'react'
import "./App.css"
import { Movies } from './components/Movies'
import { useMovies} from './hooks/useMovies'





function App() {
  
const {movies} = useMovies()
const inputRef = useRef()
console.log(inputRef)  // referencia de mi input 


const handleClick = () => {
  const inputEl = inputRef.current
  const value  = inputEl.value
  console.log(value)
}

  return (
    <div className='page'> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input  ref={inputRef} placeholder='peliculas' />
          <button onClick={handleClick} type='submit'> Buscar </button>
        </form>
      </header>

      <main>
       <Movies movies={movies}/>
      </main>
           
            
    </div>

  )
}

export default App
