import React, { useContext, useState } from "react";
import S from "./CartPage.module.scss";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../App";
import { RationInterface } from "../../interfaces/Ration.interface";
import { Link } from "react-router-dom";
import qrImg from "../../assets/img/qr.jpg";
import cx from "classnames";

const CartPage = () => {
  const { getCartItems } = useContext(CartContext);
  const [qrActive, setQrActive] = useState(false);

  return (
    <div className={S.wrapper}>
      <div className={S.order}>
        <h2 className={S.order__title}>Состав заказа</h2>
        {getCartItems().map((cartItem: RationInterface) => (
          <CartItem {...cartItem} />
        ))}
      </div>
      <div className={S.form}>
        <p>Для оформления заказа заполните все обязательные поля</p>
        <div className={S.receiver}>
          <p>Получатель</p>
          <form>
            <label className={S.nameInput}>
              ФИО *
              <input type="text" />
            </label>
            <div className={S.otherInputs}>
              <label>
                Телефон *
                <input type="text" />
              </label>
              <label>
                E-mail *
                <input type="text" />
              </label>
            </div>
          </form>
        </div>
        <div className={S.delivery}>
          <p>Доставка</p>
          <form>
            <label>
              Адрес *
              <input type="text" />
            </label>
            <label>
              Комментарий
              <textarea />
            </label>
          </form>
          <p className={S.required}>* Обязательные поля</p>
        </div>
        <CustomCheckbox>
          Я согласен (-на) с &nbsp;
          <Link to="/conf" className={S.link}>
            политикой обработки персональных данных
          </Link>
        </CustomCheckbox>
        <CustomCheckbox>Списать накопленные бонусы при оплате</CustomCheckbox>
        <div className={S.makeOrder}>
          <h2>
            ИТОГ{" "}
            {getCartItems().reduce(
              (accumulator: number, item: RationInterface) =>
                accumulator + item.price,
              0
            )}{" "}
            ₽{" "}
          </h2>
          <input
            type="button"
            value="Оформить заказ"
            onClick={() => setQrActive(true)}
          />
        </div>
      </div>
      <img
        src={qrImg}
        alt="qr"
        className={cx(S.qr, qrActive ? S.active : "")}
        onClick={() => setQrActive(false)}
      />
    </div>
  );
};

export default CartPage;
