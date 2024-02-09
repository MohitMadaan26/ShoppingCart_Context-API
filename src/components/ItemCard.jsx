import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemcontext";
// import { itemContext } from "../itemcontext";
// import { useContext } from "react";

function ItemCard({ id, name, price }) {
  const { handleAdd, handleRemove } = useValue();
  // const handleAdd = () => {
  //   setTotal(total + price);
  //   setItem(item + 1);
  // };

  // const handleRemove = () => {
  //   if (total <= 0) {
  //     return;
  //   }

  //   if (item <= 0) {
  //     return;
  //   }

  //   setItem((prevState) => prevState - 1);
  //   setTotal((prevState) => prevState - price);
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={() => handleAdd({ id, name, price })}
        >
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
