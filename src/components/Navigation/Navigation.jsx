import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from './Navigation.module.css'

const buildLinkClass = ({ isActive }) => {
  return clsx(style['base'], isActive && style['active']);
};
export default function Navigation(){
    return(
        
        <ul className={style.navList}>
            <li>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
            </li>
              <li>
                <NavLink to="/catalog" className={buildLinkClass}>Catalog</NavLink>
            </li>
        </ul>
    )
}