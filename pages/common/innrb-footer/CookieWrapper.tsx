import React from "react";
import Cookies from "./Cookies";
import InnrbFooter from "./InnrbFooter";

//this component is placed in the _app page
const CookieWrapper = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleToggleOpen(state: boolean) {
    setIsOpen(state);
  }
  return (
    <div className="w-full">
      <Cookies isOpen={isOpen} setIsOpen={handleToggleOpen} loading={false} state={true} />
      <InnrbFooter isOpen={isOpen} setIsOpen={handleToggleOpen} />
    </div>
  );
};

export default CookieWrapper;
