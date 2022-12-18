import React from "react";
import S from "./RationsPage.module.scss";
import Ration from "../../components/Ration/Ration";
import backImg from "../../assets/img/trial.svg";
import { rations } from "../../assets/mocks/rations";

const RationsPage = () => {
  return (
    <div className={S.wrapper}>
      <div className={S.rations}>
        {rations.map((ration) => (
          <Ration {...ration} />
        ))}
      </div>
      <div className={S.bottomBlock}>
        <div className={S.bottomBlock__left}>
          <h2>Всё ещё сомневаетесь?</h2>
          <p>
            Закажите пробный день здоровой готовой еды с бесплатной доставкой до
            дома или офиса
          </p>
        </div>
        <div className={S.bottomBlock__right}>
          <div className={S.title}>
            <p>1350 ккал</p>
            <h3>Пробный день</h3>
          </div>
          <div className={S.description}>
            Начни правильное питание с нами: 5 блюд, 1 напиток
          </div>
          <div className={S.order}>
            <input type="button" value="Попробовать" />
            <div className={S.price}>
              <h4>900 ₽</h4>
              <p>+ 45 бонусов</p>
            </div>
          </div>
          <img src={backImg} alt="backImg" className={S.background} />
        </div>
      </div>
    </div>
  );
};

export default RationsPage;
