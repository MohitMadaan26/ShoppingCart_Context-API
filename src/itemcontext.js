import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext(props) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
    // setTotal(total + price);
    // setItem(item + 1);

    const index = cart.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      setCart([...cart, { ...prod, qty: 1 }]);
      // console.log(cart);
      setTotal(total + prod.price);
    } else {
      const updatedCart = [...cart];
      updatedCart[index].qty++;
      setCart(updatedCart);
      setTotal(total + prod.price);
    }

    setItem(item + 1);
  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      cart[index].qty--;
      setItem(item - 1);
      setTotal(total - cart[index].price);
      if (cart[index].qty === 0) {
        cart.splice(index, 1);
      }
    }

    setCart(cart);
  };

  const handleResetButton = () => {
    setTotal(0);
    setItem(0);
  };

  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  const handleCartButton = () => {
    setShowCart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        handleResetButton,
        handleCartButton,
        cart,
        clear,
      }}
    >
      {showCart && <CartModal />}
      {props.children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };
export default CustomItemContext;
