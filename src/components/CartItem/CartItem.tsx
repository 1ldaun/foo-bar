import React, { useContext } from "react";
import S from "./CartItem.module.scss";
import cartItemImg from "../../assets/img/cartItem.svg";
import closeImg from "../../assets/img/close.svg";
import { RationInterface } from "../../interfaces/Ration.interface";
import { CartContext } from "../../App";

const CartItem: React.FC<RationInterface> = ({
  title,
  days,
  price,
  weeks,
  description,
}) => {
  const { removeItemFromCart } = useContext(CartContext);
  return (
    <div className={S.wrapper}>
      <div className={S.leftBlock}>
        <img src={cartItemImg} alt="item" />
        <p>
          {days} день&nbsp;&nbsp;{weeks} неделя
        </p>
      </div>
      <div className={S.rightBlock}>
        <h2 className={S.title}>{title}</h2>
        <p className={S.description}>{description}</p>
        <h3 className={S.price}>{price} ₽</h3>
        <p className={S.bonus}>+ {Math.round(price * 0.05)} бонусов</p>
      </div>
      <img
        src={closeImg}
        alt="close"
        className={S.close}
        onClick={() =>
          removeItemFromCart({ title, days, price, weeks, description })
        }
      />
    </div>
  );
};

export default CartItem;
