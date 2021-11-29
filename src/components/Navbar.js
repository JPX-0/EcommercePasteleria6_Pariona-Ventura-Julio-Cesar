import CartWidget from "./navbar/CartWidget"
import Hamburguer from "./main/buttons/Hamburguer";

const NavBar = () => {
  return (
    <nav className="header__container">
      <CartWidget title="LOGO"/>
      <ul className="header__menu">
        <CartWidget title="Inicio"/>
        <CartWidget title="Tienda"/>
        <CartWidget title="Ofertas"/>
        <li className="header__list header__list--dropdown">
          <p className="header__title">Categorias</p>
          <ol className="header__category">
            <CartWidget title="Cumpleaño" type="category"/>
            <CartWidget title="Eventos" type="category"/>
            <CartWidget title="Quinceañero" type="category"/>
            <CartWidget title="Romántico" type="category"/>
          </ol>
        </li>
        <CartWidget icon="cart"/>
      </ul>
      <Hamburguer />
    </nav>
  )};
export default NavBar;