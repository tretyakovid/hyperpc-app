import { Link } from "react-router-dom";
import { useState } from "react";

import logoImg from "../../../assets/img/logo.svg";
import Dropdown from "../../Dropdown/Dropdown";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <header className="header">
        <div className="wrapper header__wrapper">
          <div className="header-top">
            <div className="header-top__left-block">
              <Dropdown />
              <Link to="tel:+74951203520" className="header-top__tel-link">
                +74951203520
              </Link>
            </div>
            <div className="header-top__mod-menu">
              <Link to="#" className="header-top__mod-menu-link link">
                Поддержка
              </Link>
              <Link to="#" className="header-top__mod-menu-link link">
                Проекты
              </Link>
              <Link to="#" className="header-top__mod-menu-link link">
                О нас
              </Link>
              <Link to="#" className="header-top__mod-menu-link link">
                Контакты
              </Link>
            </div>
          </div>
          <div className="header-bottom">
            <Link to="/" className="header-bottom__logo-link">
              <img src={logoImg} className="header-bottom__logo" alt="logo" />
            </Link>
            <nav className="header-bottom__nav">
              <Link to="/" className="header-bottom__nav-link link">
                ИГРОВЫЕ ПК
              </Link>
              <Link to="#" className="header-bottom__nav-link link">
                НОУТБУКИ
              </Link>
              <Link to="#" className="header-bottom__nav-link link">
                РАБОЧИЕ СТАНЦИИ
              </Link>
              <Link to="#" className="header-bottom__nav-link link">
                КОНФИГУРАТОР
              </Link>
              <Link to="#" className="header-bottom__nav-link link">
                УСЛУГИ
              </Link>
            </nav>
            <div className="header-bottom__icon-nav">
              <button className="header-bottom__icon-link">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.0998 19.2397L26.4336 25.5735L25.4393 26.5679L19.1055 20.2341L20.0998 19.2397Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5762 5.18262C8.86773 5.18262 5.05078 8.99956 5.05078 13.708C5.05078 18.4165 8.86773 22.2334 13.5762 22.2334C18.2846 22.2334 22.1016 18.4165 22.1016 13.708C22.1016 8.99956 18.2846 5.18262 13.5762 5.18262ZM3.64453 13.708C3.64453 8.22291 8.09108 3.77637 13.5762 3.77637C19.0613 3.77637 23.5078 8.22291 23.5078 13.708C23.5078 19.1931 19.0613 23.6396 13.5762 23.6396C8.09108 23.6396 3.64453 19.1931 3.64453 13.708Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
              <Link to="/comparison" className="header-bottom__icon-link">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.87109 25.9717L3.87109 14.5135L12.227 14.5135L12.227 25.9717L3.87109 25.9717ZM5.27734 24.5654L10.8208 24.5654L10.8208 15.9197L5.27734 15.9197L5.27734 24.5654Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8203 25.9717L10.8203 9.7634L19.1763 9.7634L19.1763 25.9717L10.8203 25.9717ZM12.2266 24.5654L17.77 24.5654L17.77 11.1696L12.2266 11.1697L12.2266 24.5654Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7695 25.9717L17.7695 4.02739L26.1255 4.02739L26.1255 25.9717L17.7695 25.9717ZM19.1758 24.5654L24.7192 24.5654L24.7192 5.43364L19.1758 5.43364L19.1758 24.5654Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
              <Link to="/basket" className="header-bottom__icon-link">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="none"
                    stroke="white"
                    height="14"
                    width="15"
                    y="4.5"
                    x="2.5"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path
                    fill="none"
                    stroke="white"
                    d="M6.5,5C6.5,3,8,1.5,10,1.5c2,0,3.5,1.5,3.5,3.5"
                  ></path>
                </svg>
              </Link>
              <button className="header-bottom__button">Заказать звонок</button>
              <button
                className="burger"
                onClick={() => setIsVisible(!isVisible)}
              >
                <div className="burger__line"></div>
                <div className="burger__line"></div>
                <div className="burger__line"></div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isVisible && <BurgerMenu />}
    </>
  );
};

export default Header;
