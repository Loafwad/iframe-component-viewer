import React from "react";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  id?: string | "this";
};

export const Layout = ({ children, id }: LayoutProps) => {
  return (
    <div id={id} className={`flex flex-col w-full h-full xl:w-4/5 px-6 md:px-24 lg:px-48 xl:px-48 mx-auto`}>
      {children}
    </div>
  );
};
