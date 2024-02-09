import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {/* <ItemCard name="Apple" price={199} /> */}
      {data.map((item, i) => (
        <ItemCard name={item.name} price={item.price} id={i} />
      ))}
    </div>
  );
}

export default Items;
