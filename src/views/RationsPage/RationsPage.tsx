import React, { useEffect, useState } from "react";
import S from "./RationsPage.module.scss";
import Ration, { RationProps } from "../../components/Ration/Ration";
import backImg from "../../assets/img/trial.svg";
import { rationsMock } from "../../assets/mocks/rations";
import axios from "axios";
import { baseURL } from "../../App";

const RationsPage = () => {
  const [rations, setRations] = useState<RationProps[]>(rationsMock);

  useEffect(() => {
    axios
      .get(baseURL + "rations")
      .then((response) => {
        setRations(response.data);
      })
      .catch(() => {
        console.log("this page use mocks");
      });
  }, []);

  return (
    <div className={S.wrapper}>
      <div className={S.rations}>
        {rations
          .filter((ration) => ration !== rations[rations.length - 1])
          .map((ration) => (
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
            <p>{rations[rations.length - 1].calories} ккал</p>
            <h3>{rations[rations.length - 1].title}</h3>
          </div>
          <div className={S.description}>
            {rations[rations.length - 1].description}
          </div>
          <div className={S.order}>
            <input type="button" value="Попробовать" />
            <div className={S.price}>
              <h4>{rations[rations.length - 1].price + " "}₽</h4>
              <p>+ {rations[rations.length - 1].price * 0.05} бонусов</p>
            </div>
          </div>
          <img src={backImg} alt="backImg" className={S.background} />
        </div>
      </div>
    </div>
  );
};

export default RationsPage;
