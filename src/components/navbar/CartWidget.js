import imgLogo from "../../assets/logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartWidget = (props) => {
  return (
    <>
      {
        props.title === "LOGO" ?
        <Link to="/" className="header__logo rfsh">
          <img src={imgLogo} alt="Pasteleria Yuumy" className="header__logo-img"></img>
          <span className="header__logo-text">Pasteleria Yuumy</span>
        </Link> : 
        <li className="header__list">
          {
            props.icon === "cart"?
            <Link to="/cart" className="btn btn__shop">
              <i className="btn__shop-icon"><AiOutlineShoppingCart /></i>
              <span className="btn__shop-indicator">0</span>
            </Link> :
            props.title === "Inicio" ?
            <Link to="/" className="header__title rfsh">{props.title}</Link> :
            props.type === "category" ?
            <Link to={`/category/${props.title.toLowerCase()}`} className="header__title rfsh">{props.title}</Link> :
            <Link to={props.title.toLowerCase()} className="header__title rfsh">{props.title}</Link>
          }
        </li>
      }
    </>
  )};
export default CartWidget;