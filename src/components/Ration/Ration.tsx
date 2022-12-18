import React, { useContext, useState } from "react";
import S from "./Ration.module.scss";
import cx from "classnames";
import { CartContext } from "../../App";

export interface RationProps {
  title: string;
  description: string;
  calories: number;
  price: number;
}

const Ration: React.FC<RationProps> = ({
  title,
  calories,
  price,
  description,
}) => {
  const dayParams = [5, 7];
  const weekParams = [1, 2, 3, 4];
  const { addItemToCart } = useContext(CartContext);

  const [activeDay, setActiveDay] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);

  const addItemToCartHandle = () =>
    addItemToCart({
      title,
      description,
      price: price * dayParams[activeDay] * weekParams[activeWeek],
      days: dayParams[activeDay],
      weeks: weekParams[activeWeek],
    });

  return (
    <div className={S.ration}>
      <div className={S.ration__description}>
        <p>{calories} ккал</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={S.ration__params}>
        <div className={S.block}>
          <div className={S.numbers}>
            {dayParams.map((day, index) => (
              <div
                className={cx(S.number, index === activeDay && S.active)}
                onClick={() => setActiveDay(index)}
              >
                {day}
              </div>
            ))}
          </div>
          <p className={S.numberDesc}>дни приема</p>
        </div>
        <div className={S.block}>
          <div className={S.numbers}>
            {weekParams.map((week, index) => (
              <div
                className={cx(S.number, index === activeWeek && S.active)}
                onClick={() => setActiveWeek(index)}
              >
                {week}
              </div>
            ))}
          </div>
          <p className={S.numberDesc}>недели питания</p>
        </div>
        <div className={S.price}>
          <h4>{price * dayParams[activeDay] * weekParams[activeWeek]} ₽</h4>
          <p>
            {Math.round(
              price * dayParams[activeDay] * weekParams[activeWeek] * 0.05
            )}{" "}
            бонусов
          </p>
        </div>
        <input
          type="button"
          value="Добавить в корзину"
          onClick={addItemToCartHandle}
        />
      </div>
    </div>
  );
};

export default Ration;
