import { useState } from "react";
import { menuLinkList } from "../contance";
import humburger from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import SideBar from "./SideBar";
import { Cart as CartType } from "../App";
import Cart from "./Cart";

export interface Props {
  cartArr: CartType[];
  removeItemFromCart: (id: string) => void;
}

const NavBar = ({ cartArr, removeItemFromCart }: Props) => {
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
            {cartArr.length > 0 && (
              <div className="absolute text-[10px] right-[-6px] top-[-12px] px-[6px] py-[3px] text-white bg-[#FF7E1B] rounded-[6.5px]">
                {cartArr.length}
              </div>
            )}
            <img src={cartIcon} alt="" />
          </div>
          <img className="w-12 h-12" src={avatar} alt="" />
        </div>
      </nav>
      {toggle && (
        <div className="absolute left-0 top-0 border w-full h-screen bg-zinc-700 bg-opacity-30  min-[920px]:hidden">
          <SideBar setToggleOff={setToggleOff} />
        </div>
      )}
      {cartToggle && (
        <div className="absolute right-0 top-[90px] z-10">
          <Cart cartArr={cartArr} removeItemFromCart={removeItemFromCart} />
        </div>
      )}
    </>
  );
};

export default NavBar;
