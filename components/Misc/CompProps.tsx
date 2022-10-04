import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

const CompProps = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const router = useRouter();

  const [isOpen, setOpen] = useState(false);

  function handleClose() {
    setOpen(!isOpen);
  }
  //attach component to navbarTop

  useEffect(() => {}, [router]);

  return (
    <div id="compProps" className={`bg-white   absolute  md:m-6  shadow-md top-0 right-0   rounded-md  z-20`}>
      <button className={`mb-auto   p-6 overflow-hidden relative text-black  text-2xl`} onClick={handleClose}>
        <div className="flex gap-2">
          <HiX />
          <p className={`text-sm my-auto  overflow-hidden  `}>Props</p>
        </div>
      </button>
      <div className={` flex overflow-hidden mr-auto flex-col gap-6 ${isOpen ? "h-0 p-0" : "h-full p-6"}`}>
        {children}
      </div>
    </div>
  );
};

export default CompProps;
/*  */
