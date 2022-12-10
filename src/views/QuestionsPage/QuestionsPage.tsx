import React from "react";
import S from "./QuestionsPage.module.scss";
import { List } from "../../components/List/List";
import { items } from "../../assets/content/questions";

const QuestionsPage = () => {
  return (
    <div className={S.wrapper}>
      <ul className={S.navigation}>
        <li className={S.active}>Продукты и меню</li>
        <li>Оплата и доставка</li>
        <li>Хранение</li>
      </ul>
      <List items={items} />
    </div>
  );
};

export default QuestionsPage;
