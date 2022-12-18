import React, { useContext } from "react";
import S from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import location from "../../assets/img/location.svg";
import phone from "../../assets/img/phone.svg";
import order from "../../assets/img/order.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

const Header = () => {
  const { getCartItems } = useContext(CartContext);

  return (
    <div className={S.header}>
      <div className={S.contacts}>
        <img className={S.header__logo} src={logo} alt="logo" />
        <div className={S.location}>
          <img src={location} alt="location" />
          <p>Санкт-Петербург</p>
        </div>
        <div className={S.phone}>
          <img src={phone} alt="phone" />
          <p>+7(988)-XXX-XX-XX</p>
        </div>
      </div>
      <div className={S.menu}>
        <nav className={S.menu__list}>
          <Link to="/">О компании</Link>
          <Link to="/rations">Рационы</Link>
          <Link to="/qa">Вопросы</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/promo">Акции</Link>
        </nav>
        <Link to="/cart" className={S.order}>
          <img src={order} alt="order" />
          {!!getCartItems().length && <div>{getCartItems().length}</div>}
        </Link>
      </div>
    </div>
  );
};

export default Header;
