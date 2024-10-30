import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { CreditCard } from "lucide-react";
import { useState } from "react";
import { NavMenuMobile } from "./NavMenuMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky z-50 top-0 backdrop-blur-lg shadow-sm">
      <div className="max-w-[94%] mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-3xl mb-4 md:mb-2 font-bold tracking-tight">
          AnanyaSoftware
        </Link>

        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="hidden md:flex">
          <button className="bg-black text-white py-3 px-4 rounded-md flex gap-2 items-center">
            Payment <CreditCard />
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {
        isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

              <NavMenuMobile />
              <div className="flex flex-col">

              <button className="w-full flex justify-center text-left bg-black text-white py-2 px-4 rounded-full mt-2">
                Sign in
              </button>
                </div>
              </div>

            </div>

          </div>
        )
      }
    </nav>
  );
};

export default Navbar;
