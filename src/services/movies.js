const API_KEY = "4287ad07"


export const searchMovies = async ({search}) => {

    if(search === "") return null

    try{
        const response  = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

          return movies?.map(movie => ({  //mapear los datos desde un punto para controlar el contrato de la api 
            id: movie.imdbID,
            title: movie.Title,
            years: movie.Year,
            poster: movie.Poster,
          }))  
        //decide la tranformacion de los datos de la api
    } catch(e){
            throw new ("error searching movies")
        } 
        
        
    }