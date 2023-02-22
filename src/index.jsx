import React from "react"
import ReactDOM from "react-dom/client"
// Mise en place router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ApartmentPage from "./pages/ApartmentPage"
import About from "./pages/About"

const router = createBrowserRouter([
  // path de base
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404 error not found</h1>,
  },
  {
    path: "/flat",
    element: (
      <>
        <Navbar />
        <ApartmentPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
