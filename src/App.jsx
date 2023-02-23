import { useState } from 'react'
import "./App.css"
import responsiveMovies from './mocks/with_results.json'
// import noResults from './mocks/no_results.json'

function App() {
  const movies = responsiveMovies.Search
  const hasMovies = movies.length > 0
  console.log(movies.length)

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
        { 
          hasMovies 
          ? ( 
            <ul>  
               {
                  movies.map(movie => (
                  <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.title}/>
                  </li>
                ))
               }
            </ul>
            )
          : (
              <p> no se encuentra peliculas</p>
            )
        }
        </main>
    </div>

  )
}

export default App
