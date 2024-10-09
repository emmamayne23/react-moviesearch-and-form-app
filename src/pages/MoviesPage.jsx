import MiniHeroCard from "../components/MiniHeroCard"
import Movies from "../components/Movies"

const MoviesPage = () => {
  return (
    <>
      <MiniHeroCard 
      message="This is the Movies Page. Search for any movie you want.." 
      bg="bg-blue-500"
      />
      <Movies />
    </>
  )
}

export default MoviesPage