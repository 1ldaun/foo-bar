import React, { useEffect, useState } from "react";
import S from "./ContactsPage.module.scss";
import waImg from "../../assets/img/wa.svg";
import vkImg from "../../assets/img/vk.svg";
import tgImg from "../../assets/img/tg.svg";
import ytImg from "../../assets/img/yt.svg";
import axios from "axios";
import { baseURL } from "../../App";
import { contactsMock } from "../../assets/mocks/contacts";
import { Link } from "react-router-dom";
import cx from "classnames";

export interface addressInterface {
  city: string;
  street: string;
  building: string;
}

export interface contactsInterface {
  phone: string;
  address: addressInterface;
  email: string[];
  schedule: string;
}

const DEFAULT_BUTTON_TEXT = "Задать вопрос";
const SUCCESS_BUTTON_TEXT = "Ваш вопрос успешно отправлен!";

const ContactsPage = () => {
  const [contacts, setContacts] = useState<contactsInterface>(contactsMock);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT);

  const getCertificate = () => {
    if (name.length && phone.length) {
      axios.post(baseURL + "certificate", { name, phone }).then(() => {
        setButtonText(SUCCESS_BUTTON_TEXT);
        setPhone("");
        setName("");
        setQuestion("");
      });
    }
  };

  useEffect(() => {
    axios
      .get(baseURL + "contacts")
      .then((response) => {
        setContacts(response.data[0]);
      })
      .catch(() => {
        console.log("this page use mocks");
      });
  }, []);

  return (
    <div className={S.wrapper}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A901b9d06acb5f0a10fbc4ae1f6550b7c0f3b5a3ada020cd38a2721ef80bb0953&amp;source=constructor"
        width="100%"
        height="175"
        frameBorder="0"
      ></iframe>
      <div className={S.container}>
        <div className={S.container__left}>
          <div className={S.block}>
            <h2>Адрес</h2>
            <p>
              {contacts.address.city +
                ", " +
                contacts.address.street +
                ", " +
                contacts.address.building}
            </p>
          </div>
          <div className={S.block}>
            <h2>Время работы</h2>
            <p>{contacts.schedule}</p>
          </div>
          <div className={S.block}>
            <h2>Телефон</h2>
            <p>
              {contacts.phone.split("\n")[0]} <br />{" "}
              {contacts.phone.split("\n")[1]}
            </p>
          </div>
          <div className={S.block}>
            <h2>E-mail</h2>
            <p>
              {contacts.email.map((item) => (
                <>
                  {item}
                  <br />
                </>
              ))}
            </p>
          </div>
          <div className={S.icons}>
            <img src={waImg} alt="wa" />
            <img src={tgImg} alt="tg" />
            <img src={vkImg} alt="vk" />
            <img src={ytImg} alt="yt" />
          </div>
        </div>
        <div className={S.container__right}>
          <h1>Остались вопросы?</h1>
          <form className={S.callback}>
            <div className={S.callback__block}>
              <label>ФИО</label>
              <input
                type="text"
                className={S.nameInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={S.callback__block}>
              <label>Телефон</label>
              <input
                type="text"
                className={S.nameInput}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
          <div className={S.callback__textArea}>
            <label>Ваш вопрос</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <p className={S.pConf}>
            Нажимая на кнопку “Задать вопрос” вы соглашаетесь с{" "}
            <Link to="/conf">политикой обработки персональных данных</Link>
          </p>
          <input
            type="submit"
            className={cx(
              S.callbackButton,
              buttonText === SUCCESS_BUTTON_TEXT ? S.active : ""
            )}
            value={buttonText}
            onClick={getCertificate}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
