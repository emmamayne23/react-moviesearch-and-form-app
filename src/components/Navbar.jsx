import { NavLink } from "react-router-dom"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Navbar = () => {

    const linkClass = ({isActive}) => isActive
    ? 'bg-slate-950 hover:bg-slate-800 p-2 rounded-xl duration-300'
    : 'hover:bg-slate-800 p-2 rounded-xl duration-300'

  return (
    <>
        <nav>
            <div className="flex bg-amber-500 text-white md:h-18">
                <div className=" p-3 w-32">
                    <NavLink to="/" className="flex gap-2 hover:shadow-current hover:shadow-lg">
                        <img src={reactLogo} alt="React Logo" className="md:w-20" />
                        <img src={viteLogo} alt="Vite Logo" className="md:w-20" />
                    </NavLink>
                </div>
                <div className="flex justify-end items-center gap-3  w-full pr-5">
                    <NavLink to="/" className={linkClass}>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/movies" className={linkClass}>
                        <span>Movies</span>
                    </NavLink>
                    <NavLink to="/login" className={linkClass}>
                        <span>Sign In</span>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar