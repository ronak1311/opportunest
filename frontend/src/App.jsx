import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login';
const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
