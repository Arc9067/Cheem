import React from "react";

const Header = () => {
  return (
    <header className="py-3 w-full backdrop-blur-xl absolute top-0">
      <nav className="container flex justify-between items-center">
        <a href="" className="text-4xl capitalize font-Changa text-white">
          cheems
        </a>
        <div className="flex gap-4 items-center">
          <a
            href="https://t.me/Cheems_Erc"
            className="text-3xl bg-white px-5 hidden md:block py-1 capitalize hover:bg-primary"
          >
            telegram
          </a>
          <a
            href="https://mobile.twitter.com/Cheems_Erc"
            className="text-3xl bg-white px-5 hidden md:block py-1 capitalize hover:bg-primary"
          >
            twitter
          </a>
          <a
            href=""
            className="text-3xl bg-white px-5  py-1 capitalize hover:bg-primary"
          >
            buy now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
