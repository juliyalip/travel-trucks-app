import logo from "../../icons/logo.svg?react";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import style from './Header.module.css'

export default function Header() {
  return (
    <header>
      <Container>
        <div className={style.containerHeader}>
          <img src={logo} alt="logo" />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
