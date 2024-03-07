const Categories = () => {
  const categories = [
    "Для стримов",
    "Для киберспорта",
    "Для 2к",
    "Для 4к",
    "250 000 руб.",
    "450 000 руб.",
    "600 000 руб.",
    "750 000 руб.",
  ];
  return (
    <section className="scrollable">
      <div className="wrapper scrollable__wrapper">
        {categories.map((name, i) => (
          <a href="#" key={i} className="scrollable__link">
            {name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
