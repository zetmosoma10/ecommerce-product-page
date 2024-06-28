import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";

export interface Cart {
  count: number;
  amount: number;
  discountRate: number;
}

export default function App() {
  const [cartArr, setCartArr] = useState<Cart[]>([]);
  const [cartData, setCartData] = useState({
    count: 0,
    amount: 2560,
    discountRate: 0.5,
  });

  const addItemToCart = () => {
    setCartArr([...cartArr, cartData]);
  };

  const subtractItemCount = () => {
    setCartData((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };

  const addItemCount = () => {
    setCartData((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  return (
    <div className="min-h-screen">
      <NavBar cartArr={cartArr} cartItemsCount={cartData.count} />
      <ProductPage
        subtractItemCount={subtractItemCount}
        addItemCount={addItemCount}
        cartData={cartData}
        addItemToCart={addItemToCart}
      />
    </div>
  );
}
