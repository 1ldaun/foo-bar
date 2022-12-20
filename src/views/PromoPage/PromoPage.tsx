import React, { useState } from "react";
import S from "./PromoPage.module.scss";
import certificateImage from "../../assets/img/certificate.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../App";
import cx from "classnames";

const DEFAULT_BUTTON_TEXT = "Заказать сертификат";
const SUCCESS_BUTTON_TEXT = "С вами скоро свяжутся!";

const PromoPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT);

  const getCertificate = () => {
    if (name.length && phone.length) {
      axios.post(baseURL + "certificate", { name, phone }).then(() => {
        setButtonText(SUCCESS_BUTTON_TEXT);
        setPhone("");
        setName("");
      });
    }
  };

  return (
    <div className={S.wrapper}>
      <ul className={S.cards}>
        <li className={S.card}>
          <div>Рацион на 7 дней со скидкой 7%</div>
          <p>
            Выбирайте любой рацион на 7 дней, при оформлении заказа указывайте
            промокод <strong>НЕДЕЛЯ</strong> и получайте скидку 7% на его
            стоимость
          </p>
          <h3>Выбрать рацион &#8594;</h3>
        </li>
        <li className={S.card}>
          <div>Кешбэк 5% от суммы каждого заказа</div>
          <p>
            После каждого заказа Вам начислятся бонусы в размере 5% от суммы
            покупки. Вы сможете оплатить ими до 50% стоимости следующего заказа
          </p>
          <h3>Сделать заказ &#8594;</h3>
        </li>
        <li className={S.card}>
          <div>Скидка 10% другу на первый заказ</div>
          <p>
            Пригласите друга попробовать FooBar со скидкой 10%. Вам будут
            начислены 1500 бонусов, когда он сделает первый заказ, указав Ваш
            личный промокод
          </p>
          <h3>Получить промокод &#8594;</h3>
        </li>
      </ul>

      <div className={S.certificate}>
        <h2>Подарочный сертификат</h2>
        <p>
          Подарок, который легко дарить и приятно получать. Выберите номинал, и
          мы лично привезем Вам подарочный сертификат на указанный адрес.
          <br />
          <br />
          <strong>Пусть ваши близкие:</strong>
        </p>
        <ul>
          <li>
            Восстановят баланс полезных веществ в организме и начнут питаться
            правильно;
          </li>
          <li>
            Отдохнут от домашних хлопот, походов за продуктами, готовки и мытья
            посуды;
          </li>
          <li>Знают, как сильно вы их любите!</li>
        </ul>
        <img src={certificateImage} alt="certificate" />
      </div>

      <div className={S.bottomBlock}>
        <div className={S.bottomBlock__left}>
          <h2>Особенности использования</h2>
          <div className={S.additional}>
            <p>
              <strong>Подарочная упаковка</strong>
              <br />
              <br />
              Стильный конверт и открытка
            </p>
            <p>
              <strong>Номинал карты</strong>
              <br />
              <br />
              от 5000 руб
            </p>
            <p>
              <strong>Срок действия</strong>
              <br />
              <br />
              365 дней с момента заказа карты на официальном сайте
            </p>
            <p>
              <strong>Применение</strong>
              <br />
              <br />
              Просто укажите код на обороте карты при оформлении заказа
            </p>
          </div>
        </div>
        <div className={S.bottomBlock__right}>
          <h2>Сделайте правильный подарок!</h2>
          <p>
            Укажите Ваши контактные данные, и мы свяжемся с вами для уточнения
            всех деталей
          </p>
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
          <p className={S.pConf}>
            Нажимая на кнопку “Заказать сертификат” вы соглашаетесь с{" "}
            <Link to="/conf" target="_blank">
              политикой обработки персональных данных
            </Link>
          </p>
          <input
            type="submit"
            className={cx(
              S.callbackButton,
              buttonText === SUCCESS_BUTTON_TEXT ? S.active : ""
            )}
            onClick={getCertificate}
            value={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
