import Image from "next/image";
import Link from "next/link";
import React from "react";

type InnrbFooterProps = {
  setIsOpen: (state: boolean) => void;
  isOpen: boolean;
};

const InnrbFooter = ({ setIsOpen, isOpen }: InnrbFooterProps) => {
  function handleToggle(state: boolean) {
    setIsOpen(state);
    console.log("clicked");
  }
  return (
    <div className="h-24 md:h-16 flex justify-between text-sm bg-white md:px-12 flex-col  md:flex-row lg:flex-row lg:justify-between">
      <div className="flex flex-col md:flex-row text-center md:text-left my-auto gap-0 md:gap-6 ">
        <p>Copyright © 2022 Østlaft AS</p>
        <div className="flex flex-col md:flex-row md:gap-6 mx-auto ">
          <Link href="/personvern" passHref>
            <a className="link">Personvernerklæring</a>
          </Link>
          <button onClick={() => handleToggle(true)}>
            <p className="link">Informasjonskapsler</p>
          </button>
        </div>
      </div>
      <div className="my-auto mx-auto md:mx-0 lg:mx-0 flex flex-row gap-6">
        <p className="">Nettstedet er utviklet av:</p>
        <a href="https://www.innrb.no/" className="relative hover:scale-110 transition-all my-auto h-6 w-24 flex">
          <Image alt="Innlandet reklamebyrå logo" src="/innrb_logo.png" layout="fill" />
        </a>
      </div>
    </div>
  );
};

export default InnrbFooter;
