import { useState, useEffect } from 'react'

const Movies = () => {

    const [inputValue, setInputValue] = useState('')
    const [movies, setMovies] = useState([])
    const [searchMovie, setSearchMovie] = useState('')

    const handleValueChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            setSearchMovie(inputValue)
        }
    }

    const API_KEY = '3a1569eb'

    useEffect(() => {
        setMovies([])
    }, [inputValue])

    useEffect(() => {
            const fetchMovie = async () => {
                if(!searchMovie) {
                    setMovies([])
                    return
                } else {

                    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMovie}`

                    try {
                        const response = await fetch(URL)
                        const data = await response.json()
                        if(data.Response === 'True') {
                            setMovies(data.Search)
                        } else {
                            setMovies([])
                        }
                        console.log(data)
                    } catch (error) {
                        console.error('Error in fetching movie data', error)
                        setMovies([])
                    }
                }
            }
            fetchMovie()
    }, [searchMovie])

  return (
    <>
        <div>
            <div>
                <div className="text-center py-5">
                    <input type="search" 
                    value={inputValue}
                    onChange={handleValueChange}
                    onKeyPress={handleKeyPress}
                    className="border hover:cursor-pointer focus:outline-none focus:ring focus:bg-slate-900 rounded-lg p-2 w-72 duration-300 text-white" 
                    placeholder="Search for movie here..."
                    />
                </div>

                <div>
                    <div>
                    {!inputValue ? (
                        <div className="text-center text-gray-400 p-2">
                          Enter movie title to get the information
                        </div>
                      ) : movies.length > 0 ? (
                        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Correctly set the grid layout */}
                          {movies.map((movie) => (
                            <div key={movie.imdbID} className="border w-11/12 p-2 my-5 shadow-md rounded-lg">
                              <span className="font-bold text-2xl">{movie.Title}</span>
                              <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-auto object-cover rounded-md" // Responsive image
                              />
                              <div className="flex justify-between mt-2">
                                <span className="border m-1 py-1 px-2">{movie.Year}</span>
                                <span className="border m-1 py-1 px-2">{movie.Type}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-gray-400 p-2">No movies found.</div>
                      )}
                      
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Movies