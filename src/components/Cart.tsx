import deleteIcon from "../assets/icon-delete.svg";
import shoeThumbnail from "../assets/image-product-1-thumbnail.jpg";
import useCartStore from "../store";

const Cart = () => {
  const cartItems = useCartStore((s) => s.cartItems);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="rounded-[10px] shadow-xl min-[920px]:w-[360px] z-10 bg-white">
      <header className="p-6 border-b">
        <h4 className="font-bold text-base text-[#1D2026]">Cart</h4>
      </header>
      <div className="py-6 px-4">
        {cartItems.length > 0 ? (
          <ul className="space-y-3 ">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-around ">
                <img
                  className="w-12 h-12 rounded-[4px]"
                  src={shoeThumbnail}
                  alt=""
                />
                <div className="flex flex-col mx-2">
                  <span className="text-base text-[#69707D]">
                    Fall Limited Edition Sneakers
                  </span>
                  <span className="text-[#69707D]">
                    {`R${2765} x ${item.count}`}{" "}
                    <span className="font-bold text-[#1D2026]">
                      ${2765 * item.count}
                    </span>
                  </span>
                </div>
                <img
                  onClick={() => removeItem(item.id)}
                  className="cursor-pointer"
                  src={deleteIcon}
                  alt=""
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-bold text-base text-[#69707D] text-center my-4">
            Your cart is empty
          </p>
        )}
        {cartItems.length > 0 && (
          <button className="text-base font-bold text-white bg-[#FF7E1B] hover:bg-opacity-75 rounded-[10px] py-5 w-full mt-6">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
