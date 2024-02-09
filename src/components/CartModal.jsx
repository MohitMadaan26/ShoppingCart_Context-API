import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemcontext";

function CartModal(props) {
  const { cart, total, clear, handleCartButton } = useValue();

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={handleCartButton}>
        Close
      </div>
      <div onClick={clear} className={styles.clearButton}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className={styles.cartCard} key={item.id}>
              <h1>{item.name}</h1>
              <h2>X {item.qty}</h2>
              <h3>X {item.qty * item.price}</h3>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
