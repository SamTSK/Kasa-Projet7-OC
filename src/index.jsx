import React from "react"
import ReactDOM from "react-dom/client"
// Mise en place router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ApartmentPage from "./pages/ApartmentPage"
import About from "./pages/About"
import { ErrorPage } from "./pages/ErrorPage"

const router = createBrowserRouter([
  // path de base
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
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
