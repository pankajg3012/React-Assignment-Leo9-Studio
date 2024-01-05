import React from "react";
import logo from "../assets/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div>
      <header className="bg-primary rounded">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a href="">
            <img src={logo} alt="logo" />
          </a>
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray1 transition hover:text-white"
                    href="/"
                  >
                    Product{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray1 transition hover:text-white "
                    href="/"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray1 transition hover:text-white"
                    href="/"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray1 transition hover:text-white"
                    href="/"
                  >
                    Resources{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray1 transition hover:text-white"
                    href="/"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className=" text-gray1block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:text-white"
                  href="/"
                >
                  Login / Signup
                </a>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:block sm:flex">
                <MenuIcon/>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
