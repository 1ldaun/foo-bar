import React from "react";
import S from "./CartItem.module.scss";
import cartItemImg from "../../assets/img/cartItem.svg";
import closeImg from "../../assets/img/close.svg";

const CartItem = () => {
  return (
    <div className={S.wrapper}>
      <div className={S.leftBlock}>
        <img src={cartItemImg} alt="item" />
        <p>1 день&nbsp;&nbsp;1 неделя</p>
      </div>
      <div className={S.rightBlock}>
        <h2 className={S.title}>Пробный день</h2>
        <p className={S.description}>
          Начни правильное питание с нами: 5 блюд, 1 напиток
        </p>
        <h3 className={S.price}>900 ₽</h3>
        <p className={S.bonus}>+ 45 бонусов</p>
      </div>
      <img src={closeImg} alt="close" className={S.close} />
    </div>
  );
};

export default CartItem;
