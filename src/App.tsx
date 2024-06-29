import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import { nanoid } from "nanoid";

export interface Cart {
  count: number;
  id: string;
}

export default function App() {
  const [cartArr, setCartArr] = useState<Cart[]>([]);

  const [count, setCount] = useState(0);

  const addItemToCart = () => {
    setCartArr([...cartArr, { count, id: nanoid() }]);
  };

  const removeItemFromCart = (id: string) => {
    setCartArr(cartArr.filter((cartItem) => cartItem.id !== id));
  };

  const resetCount = () => {
    setCount(0);
  };

  const subtractItemCount = () => {
    setCount(count - 1);
  };

  const addItemCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen">
      <NavBar cartArr={cartArr} removeItemFromCart={removeItemFromCart} />
      <ProductPage
        subtractItemCount={subtractItemCount}
        addItemCount={addItemCount}
        count={count}
        addItemToCart={addItemToCart}
        resetCount={resetCount}
      />
    </div>
  );
}
