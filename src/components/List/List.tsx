import React from "react";
import S from "./List.module.scss";

export interface ListItem {
  title: string;
  body: string;
}

export interface ListProps {
  items: ListItem[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul className={S.wrapper}>
      {items.map((item, index) => (
        <li key={index} className={S.item}>
          <h3 className={S.item__header}>{item.title}</h3>
          <p className={S.item__body}>{item.body}</p>
        </li>
      ))}
    </ul>
  );
};
