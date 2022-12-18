import React, { useState } from "react";
import S from "./QuestionsPage.module.scss";
import { List } from "../../components/List/List";
import {
  itemsDelivery,
  itemsProduct,
  itemsStore,
} from "../../assets/mocks/questions";

const QuestionsPage = () => {
  const itemsLists = [itemsProduct, itemsDelivery, itemsStore];
  const [activeList, setActiveList] = useState(0);
  const listHeaders = ["Продукты и меню", "Оплата и доставка", "Хранение"];

  return (
    <div className={S.wrapper}>
      <ul className={S.navigation}>
        {listHeaders.map((header, index) => (
          <li
            className={index === activeList ? S.active : ""}
            onClick={() => setActiveList(index)}
          >
            {header}
          </li>
        ))}
      </ul>
      <List items={itemsLists[activeList]} />
    </div>
  );
};

export default QuestionsPage;
