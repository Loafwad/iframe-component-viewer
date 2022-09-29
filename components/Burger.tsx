import React from "react";

type BurgerProps = {
  handlerFunction: Function;
  state: boolean;
  hidden?: boolean;
};

export const Burger = ({ handlerFunction, state, hidden }: BurgerProps) => {
  function handleToggle() {
    handlerFunction(!state);
  }

  const barColor = "bg-secondary";
  const bgColor = state ? "bg-primary_light" : "bg-primary";
  const textColor = "text-secondary";

  return (
    <button
      onClick={handleToggle}
      className={`flex ${
        hidden && "md:translate-x-20 lg:translate-x-24 "
      } active:opacity-20 h-full ${bgColor} px-2 gap-4 transition-all 
        hover:bg-primary_light rounded-md   m-auto`}
    >
      <div className="flex gap-4  p-4 ">
        <figure
          className={`${state ? "rotate-0 mr-1" : "rotate-90 "}  h-full relative  transition-all flex gap-1 lg:my-auto`}
        >
          <div
            className={`${
              state ? "-rotate-45  translate-x-2" : "-rotate-0"
            } transition-all h-6 w-1 my-auto rounded-full overflow-hidden ${barColor}`}
          ></div>
          <div
            className={` ${
              state ? "h-0 w-0" : "h-6 w-1"
            } transition-all rounded-full overflow-hidden ${barColor} my-auto`}
          ></div>
          <div
            className={`${
              state ? "rotate-45 relative  -translate-x-1 " : "rotate-0"
            } transition-all  h-6 my-auto w-1 rounded-full overflow-hidden ${barColor}`}
          ></div>
        </figure>
        <p className={`${textColor} ${hidden ? "hidden" : "hidden lg:flex"}    text-lg my-auto font-bold`}>Meny</p>
        <p className="sr-only">Åpne navigasjons meny</p>
      </div>
    </button>
  );
};
