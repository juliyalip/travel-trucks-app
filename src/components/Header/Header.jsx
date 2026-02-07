import Logo from "../../icons/logo.svg?react";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.containerNav}>
          <Logo width={135} heigth={68}/>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
