import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './css/main.css'

import App from './App.tsx'
import Error from './routes/Error.tsx'
import Home from './routes/Home.tsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />
    }
  ],
  errorElement: <Error />
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
