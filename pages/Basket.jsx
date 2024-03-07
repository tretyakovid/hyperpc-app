const Basket = () => {
  return (
    <section className="basket">
      <div className="wrapper basket__wrapper">
        <h1 className="basket__heading heading heading">Корзина</h1>
        <div className="basket__content content-block">
          <span className="basket__not-found-text not-found-text">
            Ничего не найдено
          </span>
        </div>
      </div>
    </section>
  );
};

export default Basket;
