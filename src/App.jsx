import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import Home from './Components/Home/Home'
import MainlayOut from './Components/MainlayOut/MainlayOut'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import 'animate.css'


function App() {

  const routes = createBrowserRouter([
    {
      path: '/', element: <MainlayOut />,
      children: [{
        index: true, element: <Home />
      }
        , {
        path: 'about', element: <About />
      },
      {
        path: 'contact', element: <Contact />
      },
      {
        path: 'portfolio', element: <Portfolio />
      },
      {
        path: '*', element: <Home />
      }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
