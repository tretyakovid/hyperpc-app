import { Link } from "react-router-dom";
import { useState } from "react";

const BurgerMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const onClickListItem = (i) => {
    setSelected(i);
    setIsVisible(false);
  };
  const list = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Нижний Новгород",
    "Казань",
    "Самара",
    "Омск",
    "Челябинск",
    "Уфа",
    "Красноярск",
    "Краснодар",
    "Пермь",
    "Екатеринбург",
    "Волгоград",
  ];
  const dropdownName = list[selected];
  return (
    <>
      <div
        className={
          !isVisible ? "burger-menu burger-menu--active" : "burger-menu"
        }
      >
        <div className="burger-menu__content">
          <div className="burger-menu__geo-city geo-city">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                fill="none"
                stroke="#999"
                strokeWidth="1.01"
                d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"
              ></path>
              <circle
                fill="none"
                stroke="#999"
                cx="10"
                cy="6.8"
                r="2.3"
              ></circle>
            </svg>
            <div className="geo-city__select">
              <h2 className="geo-city__heading">Ваш город</h2>
              <Link to="#" className="geo-city__link">
                {dropdownName}
              </Link>
            </div>
          </div>
          <hr className="burger-menu__line" />
          <div className="burger-menu__accordion"></div>
          <div className="burger-menu__mod header-top__mod-menu">
            <Link to="#" className="burger-menu__mod-link link">
              Поддержка
            </Link>
            <Link to="#" className="burger-menu__mod-link link">
              Проекты
            </Link>
            <Link to="#" className="burger-menu__mod-link link">
              О нас
            </Link>
            <Link to="#" className="burger-menu__mod-link link">
              Контакты
            </Link>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="dropdown">
          <button
            onClick={() => setIsVisible(false)}
            className="dropdown__close"
          >
            <svg
              className="dropdown__close-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <line
                fill="none"
                stroke="#999"
                strokeWidth="1.1"
                x1="1"
                y1="1"
                x2="13"
                y2="13"
              ></line>
              <line
                fill="none"
                stroke="#999"
                strokeWidth="1.1"
                x1="13"
                y1="1"
                x2="1"
                y2="13"
              ></line>
            </svg>
          </button>
          <h3 className="dropdown__heading">Выбор города</h3>
          <p className="dropdown__subheading">
            От города зависит стоимость и время доставки
          </p>
          <div className="dropdown__search">
            <input className="dropdown__input" placeholder="Ваш город..." />
          </div>
          <ul className="dropdown__city-list">
            {list.map((name, i) => (
              <li
                onClick={() => onClickListItem(i)}
                key={i}
                className="dropdown__list-item"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
