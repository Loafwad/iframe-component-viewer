import React, { useState } from "react";
import { HiX } from "react-icons/hi";

const CompProps = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [first, setfirst] = useState(false);

  function handleClose() {
    setfirst(!first);
  }
  return (
    <div className="bg-white left-0 bottom-0 fixed m-12 rounded-md shadow-md z-20">
      <button className={`mb-auto p-6 overflow-hidden relative text-black  text-2xl`} onClick={handleClose}>
        <div className="flex gap-2">
          <HiX />
          <p className="text-sm my-auto ">Props</p>
        </div>
      </button>
      <div className={` flex overflow-hidden mr-auto flex-col gap-6 ${first ? "h-0 p-0" : "h-full p-6"}`}>
        {children}
      </div>
    </div>
  );
};

export default CompProps;
