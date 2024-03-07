import { useState } from "react";

const PcBlock = ({ heading, subheading, price, priceMonthly, image }) => {
  const [pcCount, setPcCount] = useState(0);

  const onClickAdd = () => {
    setPcCount(pcCount + 1);
  };

  return (
    <div className="computer__card">
      <div className="computer__card-label">3 комплектации</div>
      <img src={image} className="computer__card-img" alt="pc" />
      <div className="computer__card-information">
        <div className="computer__card-title">
          <h3 className="computer__card-heading">{heading}</h3>
          <p className="computer__card-subheading">{subheading}</p>
        </div>
        <div className="computer__card-cost">
          <p className="computer__card-price">От {price} ₽</p>
          <p className="computer__card-price-monthly">{priceMonthly} ₽/мес</p>
        </div>
      </div>
      <ul className="computer__card-description">
        <li className="computer__card-item">
          <div className="computer__item-icon-block">
            <svg
              fill="white"
              className="computer__item-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M2,4V3H0V4H1V16H2V15H20V4ZM19,14H2V5H19Z"></path>
              <path d="M14.5,12A2.5,2.5,0,1,0,12,9.5,2.51,2.51,0,0,0,14.5,12Zm0-4A1.5,1.5,0,1,1,13,9.5,1.5,1.5,0,0,1,14.5,8Z"></path>
              <rect x="4" y="17" width="7" height="1"></rect>
              <rect x="4" y="7" width="1" height="5"></rect>
              <rect x="8" y="7" width="1" height="5"></rect>
            </svg>
          </div>
          <span className="computer__card-text">
            Графическая карта GeForce RTX 4060
          </span>
        </li>
        <li className="computer__card-item">
          <div className="computer__item-icon-block">
            <svg
              fill="white"
              className="computer__item-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <rect x="18" y="14" width="2" height="1"></rect>
              <rect x="18" y="11" width="2" height="1"></rect>
              <rect x="18" y="8" width="2" height="1"></rect>
              <rect x="18" y="5" width="2" height="1"></rect>
              <rect y="14" width="2" height="1"></rect>
              <rect y="11" width="2" height="1"></rect>
              <rect y="8" width="2" height="1"></rect>
              <rect y="5" width="2" height="1"></rect>
              <rect x="5" y="18" width="1" height="2"></rect>
              <rect x="8" y="18" width="1" height="2"></rect>
              <rect x="11" y="18" width="1" height="2"></rect>
              <rect x="14" y="18" width="1" height="2"></rect>
              <rect x="5" width="1" height="2"></rect>
              <rect x="8" width="1" height="2"></rect>
              <rect x="11" width="1" height="2"></rect>
              <rect x="14" width="1" height="2"></rect>
              <path d="M3,17H17V3H3ZM4,4H16V16H4Z"></path>
              <path d="M6,14h8V6H6ZM7,7h6v6H7Z"></path>
            </svg>
          </div>
          <span className="computer__card-text">
            Процессоры 4 и 10 ядерные Intel Core i3 / i5
          </span>
        </li>
        <li className="computer__card-item">
          <div className="computer__item-icon-block">
            <svg fill="white" width="20" height="20" viewBox="0 0 20 20">
              <rect y="2" width="1" height="9"></rect>
              <rect x="15" y="3" width="1" height="7"></rect>
              <rect x="7" y="15" width="9" height="1"></rect>
              <rect x="7" y="12" width="9" height="1"></rect>
              <path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path>
              <path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path>
            </svg>
          </div>
          <span className="computer__card-text">
            Материнские платы на чипсете Intel B760
          </span>
        </li>
        <li className="computer__card-item">
          <div className="computer__item-icon-block">
            <svg
              fill="white"
              className="computer__item-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M0,3V15H20V3ZM19,14H1V4H19Z"></path>
              <rect x="2" y="17" width="16" height="1"></rect>
              <rect x="3" y="7" width="2" height="4"></rect>
              <rect x="7" y="7" width="2" height="4"></rect>
              <rect x="15" y="7" width="2" height="4"></rect>
              <rect x="11" y="7" width="2" height="4"></rect>
            </svg>
          </div>
          <span className="computer__card-text">
            Оперативная память от 16 до 32 GB DDR4 3600MHz
          </span>
        </li>
        <li className="computer__card-item">
          <div className="computer__item-icon-block">
            <svg
              fill="white"
              className="computer__item-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M2,0V20H18V0ZM3,1H5V3H6V1H8V3H9V1h2V3h1V1h2V3h1V1h2V5H3ZM17,19H3V6H17Z"></path>
              <rect x="6" y="9" width="3" height="1"></rect>
              <rect x="6" y="12" width="3" height="1"></rect>
              <rect x="6" y="15" width="3" height="1"></rect>
              <rect x="11" y="9" width="3" height="1"></rect>
              <rect x="11" y="12" width="3" height="1"></rect>
              <rect x="11" y="15" width="3" height="1"></rect>
            </svg>
          </div>
          <span className="computer__card-text">
            Накопители SSD на 512 GB / 1 TB с интерфейсом М.2
          </span>
        </li>
        <li className="computer__card-item">
          <div className="computer__item-icon-block">
            <svg
              fill="white"
              className="computer__item-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path>
              <polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon>
            </svg>
          </div>
          <span className="computer__card-text">
            Блок питания на 500W стандарта 80+ Bronze
          </span>
        </li>
      </ul>
      <button onClick={onClickAdd} className="computer__card-btn">
        В корзину
        <span className="computer__card-btn-amount">{pcCount}</span>
      </button>
    </div>
  );
};

export default PcBlock;
