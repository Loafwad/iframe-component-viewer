import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiArrowLeft, HiMenu, HiX } from "react-icons/hi";

const Navmenu = () => {
  const [first, setfirst] = useState(true);

  function handleClose() {
    setfirst(!first);
    console.log("click");
  }
  return (
    <div className="z-40 fixed">
      <div
        className={` bg-white shadow-md rounded-md m-2 md:m-12 overflow-hidden transition-all ${
          first ? "w-0 h-0" : "w-[300px]"
        }  fixed `}
      >
        <div id="navbarTop" className="flex ">
          <div className="flex max-h-[80vh] overflow-y-auto pr-4 py-4 w-full flex-col gap-6">
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Common</p>
              <LinkElement to="/common/innrb-footer" callback={handleClose} />
              <LinkElement to="/common/hotLabel" callback={handleClose} />
              <LinkElement to="/common/carousel" callback={handleClose} />

              <div className="relative ml-4 grid">
                <LinkElement to="/common/carousel/carouselWithPreview" callback={handleClose} />
              </div>
            </div>
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Ostlaft</p>
              <LinkElement to="/ostlaft/section" callback={handleClose} />
              <LinkElement to="/ostlaft/navbar" callback={handleClose} />
              <LinkElement to="/ostlaft/knutepunktet" callback={handleClose} />
              <LinkElement to="/ostlaft/accordion" callback={handleClose} />
              <LinkElement to="/ostlaft/buttons" callback={handleClose} />
            </div>
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Ringalm</p>
              <LinkElement to="/ringalm/navbar" callback={handleClose} />
              <LinkElement to="/ringalm/lottiescroll" callback={handleClose} />
            </div>
            <div className="relative ml-4 grid">
              <p className="text-2xl pb-2">Begna</p>
              <LinkElement to="/begna-bruk/full-section" callback={handleClose} />
              <LinkElement to="/begna-bruk/grid-section" callback={handleClose} />
            </div>
          </div>
          <button className="mb-auto right-0 absolute p-4 text-2xl" onClick={handleClose}>
            <HiX />
          </button>
        </div>
      </div>
      <button
        className={`mb-auto  overflow-hidden fixed  text-2xl ${!first ? "w-0 p-0 " : "w-fit p-4"}`}
        onClick={handleClose}
      >
        {!first ? <HiX /> : <HiMenu />}
      </button>
    </div>
  );
};

const LinkElement = ({ to, callback }: { to: string; callback: any }) => {
  const split = to.split("/").pop();
  const title = split;

  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === to) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <Link passHref href={to}>
      <a
        className={`${
          isActive ? "bg-primary bg-opacity-80 text-white" : "bg-black bg-opacity-5"
        } link whitespace-nowrap flex ml-2 px-2  mt-2  rounded-md p-0.5`}
      >
        {title}
        {isActive && (
          <span className="my-auto ml-auto">
            <HiArrowLeft />
          </span>
        )}
      </a>
    </Link>
  );
};

export default Navmenu;
