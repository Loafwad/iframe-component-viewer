import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

type AccordionProps = {
  children: JSX.Element[];
};

const Accordion = ({ children }: AccordionProps) => {
  const [active, setActive] = React.useState("");

  function handletogggle(title: string) {
    setActive(title);
  }

  return (
    <div className="h-full w-full transition-all  gap-2 flex flex-col justify-center ">
      <div className="w-full transition-all flex flex-col gap-12">
        {children.map((child, index) => {
          if (child !== undefined)
            return React.cloneElement(child, {
              handletoggle: handletogggle,
              active: active,
              key: index,
            });
        })}
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
  anchor?: string;
  handletoggle?: any;
  active?: string;
};

const Item = ({ children, title, anchor, handletoggle, active }: ItemProps) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (active !== title) {
      setOpen(false);
    }
  }, [active, title]);

  const handleClick = () => {
    setOpen(!open);
    handletoggle(title);
  };

  //pass active state to children
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      open: open,
    });
  });

  return (
    <div id={anchor} className={`w-full ${open && "border-b-2"}`}>
      <button
        onClick={handleClick}
        className="hover:text-secondary group w-full flex justify-between border-b-2 text-left "
      >
        <h2 className=" text-2xl lg:text-4xl font-semibold font-plex pb-4 pt-4">{title}</h2>
        <figure
          className={` text-white group-hover:bg-secondary rounded-md bg-primary transition-all text-4xl my-auto`}
        >
          <div className={`${open && "rotate-180"} transition-all`}>
            <HiChevronDown />
          </div>
        </figure>
      </button>
      <div
        id="#container"
        className={`  transition-all ease-in-out overflow-hidden ${open ? "max-h-screen py-0 " : "max-h-0 "}`}
      >
        {childrenWithProps}
      </div>
    </div>
  );
};

Accordion.Item = Item;
export default Accordion;

type ItemCardProps = {
  value: string;
  type: string;
  animateOpen?: any;
  i?: number;
};

export const ItemCard = ({ type, value, animateOpen, i }: ItemCardProps) => {
  //if meter contains "." replace with ","

  return (
    <div
      style={{ animationDelay: `${i && i * 0.05}s` }}
      className={`${i && i % 2 && "bg-accent bg-opacity-20"} opacity-0 px-6 flex flex-row justify-between ${
        !animateOpen && "animate-fadeInRight"
      } `}
    >
      <p className="font-medium text-lg py-4">{value}</p>
      <div className="flex flex-row my-auto gap-1">
        <p>{type}</p>
      </div>
    </div>
  );
};
