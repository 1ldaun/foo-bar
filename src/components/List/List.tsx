import React from "react";
import S from "./List.module.scss";

export interface qaInterface {
  question: string;
  answer: string;
}

export interface ListProps {
  items: qaInterface[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul className={S.wrapper}>
      {items.map((item, index) => (
        <li key={index} className={S.item}>
          <h3 className={S.item__header}>{item.question}</h3>
          <p className={S.item__body}>{item.answer}</p>
        </li>
      ))}
    </ul>
  );
};
