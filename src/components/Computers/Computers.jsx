import { useEffect, useState } from "react";
import PcBlock from "../PcBlock/PcBlock";
const Computers = ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://65dcbf5de7edadead7ecd074.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <section className="computers">
      <div className="wrapper computers__wrapper">
        <div className="computer__card-list">
          {items.map((obj) => (
            <PcBlock key={obj.heading} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Computers;
