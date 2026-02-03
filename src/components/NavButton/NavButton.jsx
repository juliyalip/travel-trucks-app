import {Link} from "react-router-dom"
import style from './NavButton.module.css'

export default function NavButton({ children, path}) {
  return (
    <Link to={path} className={style.baseBtn}>
      {children}
    </Link>
  );
}
