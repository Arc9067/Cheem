import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="py-[20px] w-full text-white">
      <div className="container flex justify-center items-center gap-4">
        <a href="https://t.me/Cheems_Erc">
          <FaTelegramPlane className="text-4xl text-primary hover:text-white" />
        </a>
        <a href="https://mobile.twitter.com/Cheems_Erc">
          <TfiTwitterAlt className="text-4xl text-primary hover:text-white" />
        </a>
        <a href="mailto:yugifouga@gmail.com">
          <GrMail className="text-4xl text-primary hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
