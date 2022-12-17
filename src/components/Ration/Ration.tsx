import React, { useState } from "react";
import S from "./Ration.module.scss";
import cx from "classnames";

const Ration = () => {
  const dayParams = [5, 7];
  const weekParams = [1, 2, 3, 4];

  const [activeDay, setActiveDay] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <div className={S.ration}>
      <div className={S.ration__description}>
        <p>900 ккал</p>
        <h3>Lite</h3>
        <p>
          Сбалансированное питание с пониженным содержанием калорий для
          комфортного и плавного снижения веса
        </p>
      </div>
      <div className={S.ration__params}>
        <div className={S.block}>
          <div className={S.numbers}>
            {dayParams.map((day, index) => (
              <div
                className={cx(S.number, index == activeDay && S.active)}
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
                className={cx(S.number, index == activeWeek && S.active)}
                onClick={() => setActiveWeek(index)}
              >
                {week}
              </div>
            ))}
          </div>
          <p className={S.numberDesc}>недели питания</p>
        </div>
        <div className={S.price}>
          <h4>5400 ₽</h4>
          <p>+ 270 бонусов</p>
        </div>
        <input type="button" value="Добавить в корзину" />
      </div>
    </div>
  );
};

export default Ration;
