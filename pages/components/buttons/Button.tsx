import Link from "next/link";
import React from "react";

type ButtonProps = {
  title: string;
  secondary?: boolean;
  meta: {
    to: string;
    alt: string;
  };
  color?: string;
  icon?: JSX.Element;
};

const Button = ({ title, meta, secondary, icon, color }: ButtonProps) => {
  return (
    <Link href={meta.to} passHref>
      {!secondary ? (
        <button
          title={title}
          className={`${
            color ?? "bg-primary text-white"
          } hover:scale-105 rounded-md w-full px-12 group  flex gap-4    hover:opacity-80  
           transition-all  p-6 `}
        >
          <span className={`font-bold w-full   transition-all `}>{title}</span>
        </button>
      ) : (
        <button
          title={title}
          className={`ring-4 hover:scale-105 ring-inset ring-primary hover:bg-opacity-10 hover:bg-primary  rounded-md w-full group hover:opacity-80 flex gap-4     
           transition-all  p-6 `}
        >
          <span className={`font-bold w-full   transition-all y`}>{title}</span>
        </button>
      )}
    </Link>
  );
};

export default Button;
