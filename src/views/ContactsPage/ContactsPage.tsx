import React from "react";
import S from "./ContactsPage.module.scss";
import waImg from "../../assets/img/wa.svg";
import vkImg from "../../assets/img/vk.svg";
import tgImg from "../../assets/img/tg.svg";
import ytImg from "../../assets/img/yt.svg";

const ContactsPage = () => {
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
            <p>г. Санкт-Петербург, ул. Ломоносова, д.9</p>
          </div>
          <div className={S.block}>
            <h2>Время работы</h2>
            <p>ежедневно с 10:00 до 22:00</p>
          </div>
          <div className={S.block}>
            <h2>Телефон</h2>
            <p>
              +7(988)-XXX-XX-XX - вопросы по заказам
              <br />
              +7(988)-ХХХ-ХХ-ХХ - сотрудничество
            </p>
          </div>
          <div className={S.block}>
            <h2>E-mail</h2>
            <p>
              info@foo-bar.ru - общие вопросы
              <br />
              sale@foo-bar.ru - отдел продаж
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
              <input type="text" className={S.nameInput} />
            </div>
            <div className={S.callback__block}>
              <label>Телефон</label>
              <input type="text" className={S.nameInput} />
            </div>
          </form>
          <div className={S.callback__textArea}>
            <label>Ваш вопрос</label>
            <textarea />
          </div>
          <p className={S.pConf}>
            Нажимая на кнопку “Задать вопрос” вы соглашаетесь с{" "}
            <a href="/conf" target="_blank">
              политикой обработки персональных данных
            </a>
          </p>
          <input
            type="submit"
            className={S.callbackButton}
            value="Задать вопрос"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
