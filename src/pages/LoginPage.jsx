import MiniHeroCard from "../components/MiniHeroCard"
import Login from "../components/Login"

const LoginPage = () => {
  return (
    <>
        <MiniHeroCard 
        message="Please fill the form and Sign In" 
        bg="bg-red-500"
        />
        <Login />
    </>
  )
}

export default LoginPage