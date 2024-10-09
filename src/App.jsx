import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/login" element={<LoginPage />} />

    </Route>
  )
)

const App = () => {
  return <RouterProvider router = {router} />
}

export default App
