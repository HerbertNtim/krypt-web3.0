import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = ["Market", "Exchange", "Tutorial", "Wallets"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          src="../../images/logo.png"
          alt="logo"
          className="w-32 cursor-pointer"
        />
      </div>

      <ul className="text-white md:flex hidden items-center justify-between">
        {navItems.map((item, index) => (
          <li key={index} className="mx-4 font-bold leading-2">
            {item}
          </li>
        ))}
        <li className="bg-[#2952e3] px-4 py-2 rounded-full ml-6 font-medium hover:bg-[#2546bd] cursor-pointer">
          Login
        </li>
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white cursor-pointer md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="z-10 fixed top-0 -right-2 md:hidden blue-glassmorphism animate-slide-in w-[70vw] h-screen shadow-xl">
            <button className="text-xl w-full my-2 p-4">
              <AiOutlineClose
                fontSize={28}
                className="text-white cursor-pointer md:hidden"
                onClick={() => setToggleMenu(false)}
              />
            </button>
            <ul className="flex flex-col gap-4 text-white items-end justify-center">
              {navItems.map((item, index) => (
                <li key={index} className="mx-4 my-2">
                  {item}
                </li>
              ))}
              <li className="bg-[#2952e3] mr-2 px-4 py-2 rounded-md ml-6 font-medium hover:bg-[#2546bd] cursor-pointer">
                Login
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
