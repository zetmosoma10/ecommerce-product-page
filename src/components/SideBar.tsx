import { menuLinkList } from "../contance";
import closeIcon from "../assets/icon-close.svg";

interface Props {
  setToggleOff: () => void;
}

const SideBar = ({ setToggleOff }: Props) => {
  return (
    <aside className="bg-white border  w-[65%] min-h-screen p-6 z-50">
      <header>
        <img onClick={setToggleOff} src={closeIcon} alt="" />
      </header>
      <ul className="mt-12 space-y-5">
        {menuLinkList.map((link) => (
          <li className="font-bold text-lg text-[#1D2026] " key={link}>
            {link}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
