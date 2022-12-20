import React, { useContext } from "react";
import S from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import location from "../../assets/img/location.svg";
import phone from "../../assets/img/phone.svg";
import order from "../../assets/img/order.svg";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../App";

const Header = () => {
  const { getCartItems } = useContext(CartContext);

  return (
    <div className={S.header}>
      <div className={S.contacts}>
        <NavLink to="/">
          <img className={S.header__logo} src={logo} alt="logo" />
        </NavLink>
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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? S.active : "")}
          >
            О компании
          </NavLink>
          <NavLink
            to="/rations"
            className={({ isActive }) => (isActive ? S.active : "")}
          >
            Рационы
          </NavLink>
          <NavLink
            to="/qa"
            className={({ isActive }) => (isActive ? S.active : "")}
          >
            Вопросы
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? S.active : "")}
          >
            Контакты
          </NavLink>
          <NavLink
            to="/promo"
            className={({ isActive }) => (isActive ? S.active : "")}
          >
            Акции
          </NavLink>
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
