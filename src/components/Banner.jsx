import pcImg from "../../assets/img/pc-banner.webp";

const Banner = () => {
  return (
    <section className="banner">
      <div className="wrapper banner__wrapper">
        <img src={pcImg} className="banner__pc" alt="pc" />
        <div className="banner__text-content">
          <h1 className="banner__heading heading">Игровые компьютеры</h1>
          <p className="banner__subtext">
            Подберите компьютер, который подойдет для любых игр! Либо
            самостоятельно соберите комплектацию ПК и проверьте комплектующие на
            совместимость с помощью конфигуратора.
          </p>
          <a href="#" className="banner__link">
            Подобрать компьютер
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
