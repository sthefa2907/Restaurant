import {useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Food from '../Food'
import NotFound from '../NotFound'
import Biography from '../Biography'
import Ingredient from '../Ingredient'
// import './App'
import Navbar from '../../Components/Navbar'

const AppRoutes = () => {

    let routes = useRoutes([
        { path: '/', element: <Home/>},
        { path: '/food', element: <Food/>},
        { path: '/Category', element: <NotFound/>},
        { path: '/Biography', element: <Biography/>},
        { path: '/Ingredient', element: <Ingredient/>},
    ])

    return routes
}

const App = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default App


