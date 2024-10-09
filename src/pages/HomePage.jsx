import MiniHeroCard from "../components/MiniHeroCard"
import { useLocation } from "react-router-dom"

const HomePage = () => {
    const location = useLocation()
    const fullName = location.state?.fullName
  return (
    <>
        <MiniHeroCard />

        <div>
            <h1>Welcome to the Home Page!</h1>
            {fullName && <p>Hello, <span className="text-2xl font-bold text-green-600">{fullName}!</span> You have successfully logged in.</p>}
        </div>
        <div>Nothing to show here... explore the other pages :)</div>
    </>
    
  )
}

export default HomePage