import { useState } from 'react'
import "./App.css"
import { Movies } from './components/Movies'
import responsiveMovies from './mocks/with_results.json'
// import noResults from './mocks/no_results.json'

function App() {
  
  const movies = responsiveMovies.Search
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
