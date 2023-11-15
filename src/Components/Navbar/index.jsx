import { NavLink } from "react-router-dom"
import './index.css'

const Navbar = () => {

    const activeStyle = ' underline underline-offset-4'

    return (

        <nav className=" flex justify-between items-center fixed z-12 w-full py-3 px-11 text-sm font-light bg-orange-300 top-0">

            <img className="logo" src="https://th.bing.com/th/id/OIP.lYWm5tIDVtEOSxgyBKnzSgHaHa?pid=ImgDet&rs=1" alt="" />

            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg gap-3">
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        RESTAURANT
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/food'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        FOOD
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Category'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        DISH CATEGORY
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Ingredient'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        INGREDIENT
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Biography'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        BIOGRAPHY
                    </NavLink>
                </li>
                <a className="search-bar font-medium text-sm hover:text-black">
                    <input className= "buscar" type="text" placeholder="Buscar..."/> 
                    <button>&nbsp;&nbsp;Buscar</button>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar