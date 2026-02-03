import logo from "../../icons/logo.svg?react";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.containerNav}>
          <img src={logo} alt="logo" width={136} height={16}/>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
