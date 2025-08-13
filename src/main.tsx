import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './page/home/index.tsx'

const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
