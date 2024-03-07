import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = () => {
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
      <Link
        onClick={() => setIsVisible(!isVisible)}
        to="#"
        className="header-top__geo-city-link geo-city__link"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
        >
          <path
            d="M1 11l9 3 3 9 9-21z"
            stroke="#c0ff01"
            fill="none"
            strokeWidth="2"
          ></path>
        </svg>
        <span className="header-top__geo-city-text geo-city__text">
          {dropdownName}
        </span>
      </Link>
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

export default Dropdown;
