import React from 'react';
import S from './Header.module.scss'
import logo from '../../assets/img/logo.svg'
import location from '../../assets/img/location.svg'
import phone from '../../assets/img/phone.svg'
import order from '../../assets/img/order.svg'

const Header = () => {
    return (
        <div className={S.header}>
            <div className={S.contacts}>
                <img className={S.header__logo} src={logo} alt='logo'/>
                <div className={S.location}>
                    <img src={location} alt='location'/>
                    <p>Санкт-Петербург</p>
                </div>
                <div className={S.phone}>
                    <img src={phone} alt='phone'/>
                    <p>+7(988)-XXX-XX-XX</p>
                </div>
            </div>
            <nav className={S.menu}>
                <ul className={S.menu__list}>
                    <li>О компании</li>
                    <li>Рационы</li>
                    <li>Вопросы</li>
                    <li>Контакты</li>
                    <li>Акции</li>
                </ul>
                <div className={S.order}><img src={order} alt='order'/></div>
            </nav>
        </div>
    );
}

export default Header;
