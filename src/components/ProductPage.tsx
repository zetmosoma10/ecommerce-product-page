import { Cart } from "../App";
import MyCarousel from "./MyCarousel";

interface Props {
  cartData: Cart;
  addItemCount: () => void;
  subtractItemCount: () => void;
  addItemToCart: () => void;
}

const ProductPage = ({
  cartData,
  addItemCount,
  subtractItemCount,
  addItemToCart,
}: Props) => {
  return (
    <section className=" min-[920px]:max-container mb-5 min-[920px]:mt-[90px] min-h-screen">
      <div className="grid min-[920px]:grid-cols-2  gap-x-10 gap-y-6">
        <div>
          <MyCarousel />
        </div>
        <div className="self-center max-[920px]:max-container">
          <p className="font-bold text-[#FF7E1B] tracking-[1.85px] text-[12px] uppercase">
            Sneaker Company
          </p>
          <h2 className="font-bold text-3xl text-[#1D2026] mt-4 min-[920px]:text-5xl">
            Fall Limited Edition Sneakers
          </h2>
          <p className="text-base text-[#69707D] mt-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div
            className="flex items-center justify-between mt-6 min-[920px]:flex-col 
            min-[920px]:items-start min-[920px]:gap-2"
          >
            <div className="flex items-center space-x-4">
              <span className="font-bold text-3xl text-[#1D202]">
                R{cartData.amount}
              </span>
              <span className="bg-[#FFEEE2] text-[#FF7E1B] text-base font-bold rounded-md pt-[7px] px-[8px] pb-[4px] ">
                50%
              </span>
            </div>
            <span className="font-bold text-base text-[#B6BCC8] line-through">
              R{cartData.amount * cartData.discountRate}
            </span>
          </div>
          <div className="flex flex-col gap-4 mt-6 min-[920px]:flex-row ">
            <div className="flex items-center justify-around bg-[#F6F8FD] p-5 rounded-lg min-[920px]:w-[65%]">
              <button
                disabled={cartData.count === 0}
                onClick={() => subtractItemCount()}
                className="font-bold text-lg text-[#FF7E1B] hover:text-opacity-75 active:scale-110 disabled:cursor-not-allowed"
              >
                -
              </button>
              <p className="font-bold text-base text-[#1D2026]">
                {cartData.count}
              </p>
              <button
                onClick={() => addItemCount()}
                className="font-bold text-lg text-[#FF7E1B] hover:text-opacity-75 active:scale-110"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addItemToCart()}
              disabled={cartData.count === 0}
              className="flex items-center justify-center  text-white font-bold text-base bg-[#FF7E1B] py-[18px] 
                rounded-lg w-full hover:bg-opacity-75 disabled:cursor-not-allowed"
            >
              <svg
                className="mr-2"
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
