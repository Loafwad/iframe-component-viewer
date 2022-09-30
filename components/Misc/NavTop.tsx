import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

const Navmenu = () => {
  const [first, setfirst] = useState(false);

  function handleClose() {
    setfirst(!first);
    console.log("click");
  }
  return (
    <div className="z-40 fixed">
      <div
        className={` bg-white shadow-md rounded-md m-12 overflow-hidden transition-all ${
          first ? "w-0 h-0" : "w-[300px]"
        }  fixed `}
      >
        <div className="flex ">
          <div className="flex p-4 w-full flex-col gap-6">
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Common</p>
              <LinkElement to="/common/innrb-footer" callback={handleClose} />
            </div>
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Ostlaft</p>
              <LinkElement to="/ostlaft/section" callback={handleClose} />
              <LinkElement to="/ostlaft/meny" callback={handleClose} />
              <LinkElement to="/ostlaft/knutepunktet" callback={handleClose} />
            </div>
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Ringalm</p>
              <LinkElement to="/ringalm/meny" callback={handleClose} />
            </div>
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Begna</p>
              <LinkElement to="/begna-bruk/full-section" callback={handleClose} />
            </div>
          </div>
          <button className="mb-auto p-4 text-2xl" onClick={handleClose}>
            <HiX />
          </button>
        </div>
      </div>
      <button
        className={`mb-auto  overflow-hidden fixed  text-2xl ${!first ? "w-0 p-0 " : "w-fit p-4"}`}
        onClick={handleClose}
      >
        <HiX />
      </button>
    </div>
  );
};

const LinkElement = ({ to, callback }: { to: string; callback: any }) => {
  const split = to.split("/").pop();
  const title = split;

  const router = useRouter();
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Link passHref href={to}>
      <a className="link whitespace-nowrap ml-2 px-2 bg-black mt-2 bg-opacity-5 rounded-md p-0.5">{title}</a>
    </Link>
  );
};

export default Navmenu;
