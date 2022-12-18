import React, { useEffect, useState } from "react";
import S from "./QuestionsPage.module.scss";
import { List, qaInterface } from "../../components/List/List";
import { faqMock } from "../../assets/mocks/faq";
import axios from "axios";
import { baseURL } from "../../App";

export interface ListQAInterface {
  title: string;
  qa: qaInterface[];
}

export interface faqInterface {
  data: ListQAInterface[];
}

const QuestionsPage = () => {
  const [activeList, setActiveList] = useState(0);
  const [faq, setFaq] = useState<ListQAInterface[]>(faqMock.data);

  useEffect(() => {
    axios
      .get(baseURL + "faq")
      .then((response) => {
        setFaq(response.data[0].data);
      })
      .catch(() => {
        console.log("this page use mocks");
      });
  }, []);

  return (
    <div className={S.wrapper}>
      <ul className={S.navigation}>
        {faq.map((list, index) => (
          <li
            className={index === activeList ? S.active : ""}
            onClick={() => setActiveList(index)}
          >
            {list.title}
          </li>
        ))}
      </ul>
      <List items={faq[activeList].qa} />
    </div>
  );
};

export default QuestionsPage;
