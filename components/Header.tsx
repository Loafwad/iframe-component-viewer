import React from "react";

type HeaderProps = {
  children: JSX.Element | JSX.Element[];
};

const Header = ({ children }: HeaderProps) => {
  return <div className="text-4xl lg:text-6xl">{children}</div>;
};

export default Header;
