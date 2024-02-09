import React from "react";
import styles from "../styles/Nav.module.css";
import { useValue } from "../itemcontext";

function Navbar() {
  const { total, item, handleResetButton, handleCartButton } = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div>
        <button onClick={handleResetButton} className={styles.button}>
          Reset
        </button>
        <button onClick={handleCartButton} className={styles.button}>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Navbar;
