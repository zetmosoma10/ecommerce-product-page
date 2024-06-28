import MyCarousel from "./MyCarousel";

const ProductPage = () => {
  return (
    <section className=" min-[920px]:max-container min-[920px]:mt-[90px] min-h-screen">
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
              <span className="font-bold text-3xl text-[#1D202]">R1500</span>
              <span className="bg-[#FFEEE2] text-[#FF7E1B] text-base font-bold rounded-md pt-[7px] px-[8px] pb-[4px] ">
                50%
              </span>
            </div>
            <span className="font-bold text-base text-[#B6BCC8] line-through">
              R750
            </span>
          </div>
          <div className="flex flex-col gap-4 mt-6 min-[920px]:flex-row ">
            <div className="flex items-center justify-around bg-[#F6F8FD] p-5 rounded-lg min-[920px]:w-[65%]">
              <button className="font-bold text-lg text-[#FF7E1B]">-</button>
              <p className="font-bold text-base text-[#1D2026]">0</p>
              <button className="font-bold text-lg text-[#FF7E1B]">+</button>
            </div>
            <button
              className="text-white font-bold text-base bg-[#FF7E1B] py-[18px] 
                rounded-lg w-full min-[920px]:flex-grow-1"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
