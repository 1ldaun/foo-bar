import React from "react";
import S from "./MainPage.module.scss";
import food1 from "../../assets/img/food1.png";
import food2 from "../../assets/img/food2.png";
import food3 from "../../assets/img/food3.png";

const MainPage = () => {
  return (
    <div className={S.wrapper}>
      <h1>Готовое полезное питание с доставкой</h1>
      <p>
        Больше никаких изнурительных походов в магазин и подсчета калорий!
        <br />
        Теперь за ваше питание будут отвечать профессионалы
      </p>
      <input type="button" value="Перейти к выборy &#8594;" />

      <div className={S.background}>
        <img
          src={food2}
          style={{ bottom: "-60px", left: "0", transform: "rotate(180deg)" }}
          alt="background"
        />
        <img
          src={food1}
          style={{ bottom: "120px", left: "35px" }}
          alt="background"
        />
        <img
          src={food3}
          style={{ bottom: "15px", left: "175px" }}
          alt="background"
        />
        <img
          src={food2}
          style={{
            bottom: "150px",
            left: "280px",
          }}
          alt="background"
        />
        <img
          src={food2}
          style={{
            bottom: "-130px",
            left: "240px",
            transform: "rotate(90deg)",
          }}
          alt="background"
        />
        <img
          src={food1}
          style={{ bottom: "5px", left: "375px", transform: "rotate(90deg)" }}
          alt="background"
        />
        <img
          src={food3}
          style={{ bottom: "350px", left: "320px" }}
          alt="background"
        />
        <img
          src={food1}
          style={{
            bottom: "210px",
            left: "420px",
            transform: "rotate(180deg)",
          }}
          alt="background"
        />
      </div>
    </div>
  );
};

export default MainPage;
