import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Category from './pages/Category'
import Search from './pages/Search'
import Gifpage from './pages/Singlegif';
import Favorites from './pages/Favorites';
import GifProvider from './context/gif-context';

const router = createBrowserRouter([
  {
    element:<AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:category',
        element: <Category/>
      },
      {
        path: '/search/:query',
        element: <Search />
      },
      {
        path: '/:type/:slug',
        element: <Gifpage />
      },
      {
        path: '/favorites',
        element: <Favorites/>
      },
    ]
  }
])

function App() {

  return <GifProvider>
    <RouterProvider router={router} />
  </GifProvider>
}

export default App
