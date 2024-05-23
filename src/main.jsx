import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from "../components/Contact"
import About from "../components/About"
import Home from '../components/Home.jsx'

const routerFunction = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
         {
            path : "/",
            element : <Home />
         } ,
        {
            path : "/about",
            element : <About />
        },
        {
            path : "/contact",
            element : <Contact />
        }]
    },    
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routerFunction} />
)
