import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

type ButtonProps = {};

const ButtonLink = ({}: ButtonProps) => {
  return (
    <Link href="/ansatte" passHref>
      <a className="bg-primary group hover:scale-105 hover:opacity-80 transition-all flex-row flex gap-6 text-secondary p-6 rounded-md">
        <p className="flex text-lg font-exo">VÅRE ANSATTE</p>
        <figure className="text-secondary group-hover:ml-2 transition-all text-2xl my-auto">
          <HiArrowRight />
        </figure>
      </a>
    </Link>
  );
};

export default ButtonLink;
