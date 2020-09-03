import React from "react";
import { MdDoneAll } from "react-icons/md";

const Logo = () => {
  return (
    <div className="logo">
      <MdDoneAll className="logo__icon" />
      <span className="logo__title">Keep It Clean</span>
    </div>
  );
};
export default Logo;
