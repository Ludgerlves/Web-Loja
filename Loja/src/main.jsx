import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cadastro from './Cadastro.jsx';
import HomePage from './homepage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Página principal
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
