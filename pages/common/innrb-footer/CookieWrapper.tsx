import React, { useState } from "react";
import Cookies from "./Cookies";
import InnrbFooter from "./InnrbFooter";

//this component is placed in the _app page
const CookieWrapper = ({ company }: { company: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen(state: boolean) {
    setIsOpen(state);
  }
  return (
    <div className="w-full">
      <Cookies isOpen={isOpen} setIsOpen={handleToggleOpen} loading={false} state={true} />
      <InnrbFooter company={company} isOpen={isOpen} setIsOpen={handleToggleOpen} />
    </div>
  );
};

export default CookieWrapper;
