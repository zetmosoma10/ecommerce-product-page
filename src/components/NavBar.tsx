import { useState } from "react";
import cartIcon from "../assets/icon-cart.svg";
import humburger from "../assets/icon-menu.svg";
import avatar from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import { menuLinkList } from "../contance";
import useCartStore from "../store";
import Cart from "./Cart";
import SideBar from "./SideBar";

const NavBar = () => {
  const { cartItems } = useCartStore();
  const [toggle, setToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);

  const setToggleOn = () => {
    setToggle(true);
  };

  const setToggleOff = () => {
    setToggle(false);
  };

  const handleCartToggle = () => {
    setCartToggle(!cartToggle);
  };

  return (
    <>
      <nav className="relative flex items-center justify-between border-b max-container max-[920px]:py-5 max-[920px]:border-none">
        <div className="flex items-center">
          <img
            className="cursor-pointer min-[920px]:hidden"
            src={humburger}
            alt="humburger icon"
            onClick={setToggleOn}
          />
          <img className="ml-4 mr-14 cursor-pointer" src={logo} alt="logo" />
          <ul className="flex items-center space-x-9   max-[920px]:hidden">
            {menuLinkList.map((link) => (
              <li
                className="text-[#69707D] hover:text-[#1D2026] hover:border-b-2 border-[#FF7E1B]  
                min-[920px]:py-11 cursor-pointer"
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-12">
          <div onClick={handleCartToggle} className="relative cursor-pointer">
            {cartItems.length > 0 && (
              <div className="absolute text-[10px] right-[-6px] top-[-12px] px-[6px] py-[3px] text-white bg-[#FF7E1B] rounded-[6.5px]">
                {cartItems.length}
              </div>
            )}
            <img src={cartIcon} alt="" />
          </div>
          <img className="w-12 h-12" src={avatar} alt="" />
        </div>
      </nav>
      {toggle && (
        <div className="absolute left-0 top-0 border w-full h-screen bg-zinc-700 bg-opacity-30  min-[920px]:hidden z-50">
          <SideBar setToggleOff={setToggleOff} />
        </div>
      )}
      {cartToggle && (
        <div className="absolute right-0 top-[90px] z-10">
          <Cart />
        </div>
      )}
    </>
  );
};

export default NavBar;
