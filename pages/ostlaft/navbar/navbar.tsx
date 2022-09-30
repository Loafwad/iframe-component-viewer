import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Burger } from "../../../components/Burger";

const data = [
  {
    title: "Om oss",
    to: "/om-oss",
  },
  {
    title: "Kontakt",
    to: "/kontakt-oss",
  },
  {
    title: "Tradisjon og innovasjon",
    to: "/innovasjon",
  },
  {
    title: "Fabrikken",
    to: "/fabrikken",
  },
  {
    title: "Knutepunktet",
    to: "/knutepunktet",
  },
  {
    title: "Ansatte",
    to: "/ansatte",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackground, setShowBackground] = useState(false);

  const router = useRouter();

  function handleMouseOver() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  useEffect(() => {
    if (scrollPosition > 60) setShowBackground(true);
    else setShowBackground(false);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={` transition-all hidden lg:flex   duration-300 ease-out  w-full fixed `}></div>
      <button
        onMouseDown={handleToggleOpen}
        className={`${
          isOpen ? "w-full" : "w-0"
        } cursor-default   focus:outline-none  w-full h-full lg:h-screen fixed bg-transparent  `}
      >
        <p className="sr-only">Lukk navigasjonsmeny</p>
      </button>
      <nav
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className={`${
          isOpen ? "w-full lg:w-2/5" : "w-0"
        }  top-0 right-0 flex  flex-row justify-end transition-all duration-250 ease-in h-full fixed  `}
      >
        <div className="absolute ml-auto  bg-primary flex shadow-left w-full h-full">
          {/* Navbar */}
          <div className="hidden  lg:flex mx-auto">
            <DesktopNavMenu isOpen={isOpen} showBackground={showBackground} handleToggleOpen={handleToggleOpen} />
          </div>
        </div>
      </nav>
      <a
        className="transition-all h-12 px-4 -top-12 absolute focus:top-0 whitespace-nowrap  text-black focus:text-white focus:outline-none focus:ring-2 "
        href="#main"
      >
        skip to main
      </a>
      <nav
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className={`${
          isOpen ? "w-full lg:w-2/5" : "w-0"
        }  top-0 right-0 flex flex-row justify-end transition-all duration-250 ease-in h-full fixed  `}
      >
        <div className="absolute ml-auto   bg-primary flex shadow-left w-full h-full">
          {/* Navbar */}
          <div className="hidden md:flex mx-auto">
            <DesktopNavMenu isOpen={isOpen} showBackground={showBackground} handleToggleOpen={handleToggleOpen} />
          </div>
          <div className="md:hidden flex  mx-auto">
            <MobileNavMenu isOpen={isOpen} showBackground={showBackground} handleToggleOpen={handleToggleOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

type MobileNavMenuProps = {
  isOpen: boolean;
  showBackground: boolean;
  handleToggleOpen: () => void;
};

const MobileNavMenu = ({ isOpen, showBackground, handleToggleOpen }: MobileNavMenuProps) => {
  return (
    <>
      <div className="w-full   h-0 p-0 absolute">
        <div
          className={`w-full
              lg:bg-transparent    bg-primary lg:px-48 gap-6 flex justify-between fixed transition-all  right-0 top-0`}
        >
          {/* logo */}
          <div className="ml-4 my-auto w-full  flex relative">
            <div className="w-16 h-12  flex relative">
              <Logo />
            </div>
            <div className="relative w-24 h-12 -ml-4">
              <Image alt="Østlaft" src="/icons/log_type_hvit.svg" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="flex h-fit gap-6">
            <div className=" relative h-fit animate-fadeInDown flex ">
              <Burger handlerFunction={handleToggleOpen} state={isOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className={` h-full w-full flex-wrap flex overflow-auto  justify-center ${isOpen ? "visible" : "hidden"} `}>
        <section
          id="navigation"
          className="flex px-6 lg:px-0 mx-auto min-w-[400px] flex-col gap-6  justify-center h-auto  "
        >
          <div className="pt-12">
            <BigNavItem title="Modeller" to="/modeller" />
            <BigNavItem title="Tomter" to="/tomter" />
            <BigNavItem title="Hytter til salgs" to="/hytter" />
            <BigNavItem title="Bestill katalog" to="/katalog" />
          </div>
          <div className="h-1 w-1/5 bg-secondary my-2"></div>
          <div className="flex flex-col gap-2">
            {data.map((item, i) => (
              <React.Fragment key={i}>
                <NavItem {...item} id={i} />
              </React.Fragment>
            ))}
          </div>
          <a
            href="https://www.facebook.com/OstlaftBygg/"
            target="_blank"
            rel="noreferrer"
            className="h-12 hover:opacity-40 transition-all hover:translate-x-1 relative rounded-md w-12 bg-secondary"
          >
            <Image src="/icons/facebook.svg" alt="facebook logo" layout="fill" />
            <p className="sr-only">Naviger til Østlaft sin facebook side</p>
          </a>
        </section>
      </div>
    </>
  );
};

type DesktopNavProps = {
  isOpen: boolean;
  showBackground: boolean;
  handleToggleOpen: () => void;
};

const DesktopNavMenu = ({ isOpen, showBackground, handleToggleOpen }: DesktopNavProps) => {
  return (
    <>
      <div className="w-full h-0 p-0 absolute">
        <div
          className={`w-full 
                my-6 md:px-24   lg:my-16 px-6 lg:px-48 gap-6 flex justify-between fixed transition-all  right-0 top-0`}
        >
          {/* logo */}
          <Logo toggle={showBackground} />
          <div className="flex   gap-6">
            <div
              className={`${
                isOpen || showBackground ? "-translate-y-36 opacity-0" : " translate-y-0 "
              } rounded-md hidden md:flex transition-all duration-300 font-medium `}
            >
              <NavSection />
            </div>
            <div className=" relative h-full animate-fadeInDown flex ">
              <Burger hidden={showBackground} handlerFunction={handleToggleOpen} state={isOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className={` h-full w-full flex overflow-hidden justify-center ${isOpen ? "visible" : "hidden"} `}>
        <section id="navigation" className="flex mx-auto min-w-[400px] flex-col gap-6  justify-center h-auto  ">
          <div>
            <BigNavItem title="Modeller" to="/modeller" />
            <BigNavItem title="Tomter" to="/tomter" />
            <BigNavItem title="Hytter til salgs" to="/hytter" />
            <BigNavItem title="Bestill katalog" to="/katalog" />
          </div>
          <div className="h-1 w-1/5 bg-secondary my-2"></div>
          <div className="flex flex-col gap-2">
            {data.map((item, i) => (
              <React.Fragment key={i}>
                <NavItem {...item} id={i} />
              </React.Fragment>
            ))}
          </div>
          <a
            href="https://www.facebook.com/OstlaftBygg/"
            target="_blank"
            rel="noreferrer"
            className="h-12 hover:opacity-40 transition-all hover:translate-x-1 relative rounded-md w-12 bg-secondary"
          >
            <Image src="/icons/facebook.svg" alt="facebook logo" layout="fill" />
            <p className="sr-only">Naviger til Østlaft sin facebook side</p>
          </a>
        </section>
      </div>
    </>
  );
};

type BigNavItemProps = {
  title: string;
  to: string;
};

const BigNavItem = ({ title, to }: BigNavItemProps) => {
  return (
    <div className="group w-fit">
      <Link href={to} passHref>
        <a className="text-secondary group-hover:opacity-60 font-plex text-5xl font-semibold">{title}</a>
      </Link>
      <div className="h-1 w-full">
        <div className="group-hover:h-1 w-0  group-hover:w-full opacity-0 group-hover:opacity-40 transition-all bg-secondary  mr-auto"></div>
      </div>
    </div>
  );
};

type LogoProps = {
  toggle?: boolean;
};
const Logo = ({ toggle }: LogoProps) => {
  return (
    <div className="flex w-full animate-fadeIn  max-w-[250px]">
      <Link href="/" passHref>
        <a className={`h-full flex justify-start ${!toggle ? "w-full" : "w-fit "}`}>
          <div
            className={`w-24  ${
              toggle && "-rotate-90 -translate-x-20  "
            } duration-300 ease-in-out transition-all max-w-[4rem]  relative`}
          >
            <Image
              placeholder="blur"
              blurDataURL="/images/600x600.jpg"
              src="/images/600x600.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className={`w-full relative ${toggle && "w-0 h-0"} overflow-hidden   flex h-full `}>
            <div
              className={` relative ${
                toggle && "w-0 -translate-x-24"
              } duration-200 transition-all my-auto w-full h-[80%]`}
            >
              <Image
                placeholder="blur"
                blurDataURL="/images/600x600.jpg"
                src="/images/600x600.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <span className="sr-only">Tilbake til hjem</span>
        </a>
      </Link>
    </div>
  );
};

//make boxes seperate on hover
const NavSection = () => {
  return (
    <div className="flex flex-row h-full animate-fadeInDown rounded-md overflow-hidden ">
      <SpecialNavItem title="Modeller" to="/modeller" />
      <SpecialNavItem title="Tomter" to="/tomter" />
      <SpecialNavItem title="Hytter til salgs" to="/hytter" />
    </div>
  );
};

type SpecialNavItemProps = {
  title: string;
  to: string;
};

const SpecialNavItem = ({ title, to }: SpecialNavItemProps) => {
  return (
    <div className="group opacity-80 text-primary overflow-hidden  transition-all hover:opacity-60 flex">
      <div className="h-full w flex justify-center flex-col px-8 overflow-hidden bg-white">
        <Link href={to} passHref>
          <a className="whitespace-nowrap">{title}</a>
        </Link>
        <div className="h-0.5">
          <div className="group-hover:h-0.5 w-0 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all bg-primary_light  mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

type NavItemProps = {
  id: number;
  title?: string;
  to: string;
};

const NavItem = ({ title, to, id }: NavItemProps) => {
  return (
    <div
      style={{ animationDelay: (id * 50).toString() + "ms" }}
      className="flex mx-auto  flex-col opacity-0 text-white animate-fadeInRight w-full  "
    >
      <div className="flex group flex-col  font-medium text-2xl gap-2">
        <Link key={id} href={to} passHref>
          <a className="link">{title}</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
