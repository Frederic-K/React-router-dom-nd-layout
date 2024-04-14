import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import PageError from './pages/PageError'
import Root from './components/Root'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: ':id',
            element: <User />,
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

// function Root() {
//   return (
//     <>
//       <Header />
//       <Container sx={{ my: '10px' }}>
//         <Outlet />
//       </Container>
//       <Footer />
//     </>
//   )
// }

function App() {
  return <RouterProvider router={router} />
}

export default App
