import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const data = [
  {
    header: "Våre produkter",
    links: [
      {
        title: "Kledning",
        to: "/kledning",
      },
      {
        title: "K-virke",
        to: "/konstruksjonsvirke",
      },
      {
        title: "Treflis",
        to: "/treflis",
      },
      {
        title: "Proffmalt",
        to: "/proffmalt",
      },
    ],
  },
  {
    header: "Om oss",
    links: [
      {
        title: "Vår historie",
        to: "/vår-historie",
      },
      {
        title: "Bærekraft",
        to: "/bærekraft",
      },
      {
        title: "Våre forhandlere",
        to: "/forhandlere",
      },
      {
        title: "Dokumentasjon",
        to: "/dokumentasjon",
      },
    ],
  },
  {
    header: "Kontakt oss",
    links: [
      {
        title: "Kontakt oss",
        to: "/kontakt-oss",
      },
      {
        title: "Innkjøp, salg og logistikk",
        to: "/kontakt-oss/#innkjop-salg-logistikk",
      },
      {
        title: "Produksjon Ringsaker",
        to: "/kontakt-oss/#produksjon-ringsaker",
      },
      {
        title: "Produksjon Romerike",
        to: "/kontakt-oss/#produksjon-romerike",
      },
      {
        title: "Administrasjon",
        to: "/kontakt-oss/#administrasjon",
      },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackground, setShowBackground] = useState(false);

  const router = useRouter();
  const [isProff, setIsProff] = useState(false);

  let color = "white";
  //if router is not / then set isOpen to false
  useEffect(() => {
    if (router.pathname === "/proffmalt") {
      setIsDark(false);
      setIsProff(false);
    } else if (router.pathname !== "/") {
      setIsProff(false);
      setIsDark(true);
    } else {
      setIsProff(false);
      setIsDark(false);
    }
  }, [router.pathname]);

  const [isDark, setIsDark] = useState(false);

  if (isDark) color = "green";
  if (isOpen) color = "white";
  if (showBackground) color = "white";

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  const textColor = "text-" + color;

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) setShowBackground(true);
    else setShowBackground(false);
  }, [scrollPosition]);
  return (
    <>
      <div
        className={`  ${!isProff && "bg-primary lg:shadow-md "} ${
          showBackground ? `h-24 ${textColor}` : "h-16 md:h-0"
        }  transition-all hidden lg:flex  duration-300 ease-out top-0  w-full fixed z-20`}
      ></div>
      <button
        onMouseDown={handleToggleOpen}
        aria-hidden
        className={`${
          isOpen ? "w-full" : "w-0"
        } cursor-default ease-in-out duration-1000 focus:outline-none z-20 w-full h-full lg:h-screen fixed bg-transparent `}
      ></button>
      <nav
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className={`${
          isOpen ? "w-full " : "w-0"
        } z-20 top-0 right-0  transition-all duration-250 ease-in h-full fixed  `}
      >
        <div className="absolute bg-primary flex shadow-left w-full h-full">
          {/* Navbar */}
          <div className="w-full  h-0 p-0 absolute">
            <div
              className={`w-full ${
                showBackground && "bg-primary"
              } lg:bg-transparent z-10 px-2 md:px-12 lg:px-24 xl:w-full xl:px-[20%] lg:pt-6  flex justify-between fixed transition-all h-16 p-3 right-0 top-0`}
            >
              <div
                className={`absolute hidden md:flex -ml-4 -mt-10 h-24 w-52 transition-all ${
                  !isOpen ? "translate-y-0 " : "-translate-y-[55px]"
                }`}
              ></div>
              <div className={`p-0  ${textColor} `}>
                <Link href="/" passHref>
                  <a className="relative h-10 flex w-40 float-left hover:animate-bouncePop">
                    {color === "white" ? (
                      <Image
                        priority
                        src="/icons/logo_ringalm_hvit.svg"
                        layout="fill"
                        aria-hidden
                        alt="Navigate back to home page"
                      />
                    ) : (
                      <Image
                        priority
                        src="/icons/logo_ringalm_grønn.svg"
                        layout="fill"
                        aria-hidden
                        alt="Navigate back to home page"
                      />
                    )}
                    <span className="sr-only">Tilbake til hjem</span>
                  </a>
                </Link>
              </div>

              <a
                className="pt-2 px-4 text-transparent focus:text-white focus:outline-none focus:ring-2  focus:ring-yellow"
                href="#main"
              >
                skip to main
              </a>
              <a
                href="tel: 62 34 97 10"
                className={`${isOpen ? "hidden" : "flex"}  hidden my-auto animate-fadeInLeft link relative gap-4`}
              >
                <div className={`${!isOpen && "hidden"} animate-fadeInLeft w-12 h-12 relative `}>
                  <Image src="/icons/telephone_green.svg" aria-hidden alt="" objectFit="contain" layout="fill"></Image>
                </div>
                <div className={`${isOpen && "hidden"} animate-fadeInLeft w-12 h-12 relative `}>
                  <Image src="/icons/telephone_dark.svg" aria-hidden alt="" objectFit="contain" layout="fill"></Image>
                </div>
                <p className={`my-auto ${textColor}`}>62 34 97 10</p>
              </a>
              <div
                className={`${
                  isOpen ? "hidden" : " hidden lg:flex"
                } pt-4 mr-6 my-auto font-medium animate-fadeDown mx-auto ${textColor}  gap-12`}
              >
                <Link href="/kledning" passHref>
                  <a className="link hover:animate-bouncePop">KLEDNING</a>
                </Link>
                <Link href="/konstruksjonsvirke" passHref>
                  <a className="link hover:animate-bouncePop">K-VIRKE</a>
                </Link>
                <Link href="/treflis" passHref>
                  <a className="link hover:animate-bouncePop">TREFLIS</a>
                </Link>
                <Link href="/proffmalt" passHref>
                  <a className="link hover:animate-bouncePop">PROFFMALT</a>
                </Link>
              </div>
              <div className="ml-auto relative h-10 flex ">
                <Burger showBackground={showBackground} handlerFunction={handleToggleOpen} state={isOpen} />
              </div>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "visible" : "hidden"
            } ${textColor} xl:w-2/3 lg:mx-auto w-full flex  flex-col-reverse gap-12 lg:gap-24 lg:flex-row-reverse p-6 pt-24 lg:mt-24 overflow-scroll lg:p-24 h-full my-auto`}
          >
            <section id="navigation" className="grid grid-cols-2 gap-6 lg:gap-y-12 w-full lg:w-3/5  h-full lg:h-fit">
              {data.map((item, i) => (
                <div key={i}>
                  <NavItem {...item} id={i} />
                </div>
              ))}
              <Link href="https://www.facebook.com/Ringalm" title="Naviger til facebook siden til RingAlm" passHref>
                <a
                  target="_blank"
                  style={{ animationDelay: "300ms" }}
                  className="h-12 hidden lg:flex w-12 opacity-0 animate-fadeInRight hover:scale-105 link  bg-accent"
                >
                  <p className="sr-only">Naviger til RingAlm sin Facebook side.</p>
                  <div className="w-full rounded-md overflow-hidden">
                    <Image src="/icons/facebook.svg" layout="fill" objectFit="contain" alt="" />
                  </div>
                </a>
              </Link>
              <div></div>
            </section>
            <section className="w-5/6 lg:w-2/5 h-auto flex flex-col gap-12 ">
              <p className="font-bold text-4xl lg:text-6xl animate-fadeDown w-full lg:w-2/3">
                <span className="font-normal">Trygghet i</span> gode råvarer
              </p>
              <div className="flex lg:hidden gap-6 justify-between">
                <Link href="https://www.facebook.com/Ringalm" passHref>
                  <a
                    target="_blank"
                    style={{ animationDelay: "300ms" }}
                    className="h-12 flex lg:hidden w-12 opacity-0 animate-fadeInRight hover:scale-105 link  bg-accent relative"
                  >
                    <div className="w-full rounded-md overflow-hidden">
                      <Image src="/icons/facebook.svg" layout="fill" objectFit="contain" alt="" />
                    </div>
                  </a>
                </Link>
                <a href="tel: 62 34 97 10" className={` flex lg:flex my-auto animate-fadeInLeft link relative gap-4`}>
                  <div className={`${!isOpen && "hidden"}  animate-fadeInLeft w-12 h-12 relative `}>
                    <Image
                      src="/icons/telephone_green.svg"
                      aria-hidden
                      alt=""
                      objectFit="contain"
                      layout="fill"
                    ></Image>
                  </div>
                  <p className={`my-auto ${isOpen ? `${textColor}` : "text-black"}`}>62 34 97 10</p>
                </a>
              </div>
              <div className="h-72 relative w-96 hidden lg:flex bg-accent">
                <Image src="/images/utvendig_kledning_garn.webp" layout="fill" alt="utvendig kledning garn" />
              </div>
            </section>
          </div>
        </div>
      </nav>
    </>
  );
};

type NavItemProps = {
  id: number;
  header: string;
  links: Array<{
    seperator?: boolean;
    title?: string;
    to?: string;
  }>;
};

const NavItem = ({ links, header, id }: NavItemProps) => {
  return (
    <div
      style={{ animationDelay: (id * 125).toString() + "ms" }}
      className="flex flex-col opacity-0 animate-fadeInRight gap-4 w-full  lg:w-1/3 "
    >
      <p className="font-bold text-xl lg:text-3xl whitespace-nowrap">{header}</p>
      <div className="flex flex-col  font-medium text-base">
        {links.map((link, i) => (
          <div key={i}>
            {link.seperator ? (
              <div className="h-0.5 my-4 w-full bg-pale_green"></div>
            ) : (
              <>
                {link.title && link.title.includes("\n") ? (
                  <>
                    <Link href={link.to ? link.to : "/"}>
                      <a className={`link  hover:translate-x-1 transition-all `}>
                        {link.title.split("\n")[0]}
                        <br />
                        {link.title.split("\n")[1]}
                      </a>
                    </Link>
                  </>
                ) : (
                  <Link key={i} href={link.to ? link.to : "/"} passHref>
                    <a className=" whitespace-nowrap break-words link hover:translate-x-1 transition-all ">
                      {link.title}
                    </a>
                  </Link>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

type BurgerProps = {
  handlerFunction: Function;
  state: boolean;
  showBackground: boolean;
};

const Burger = ({ handlerFunction, state, showBackground }: BurgerProps) => {
  function handleToggle() {
    handlerFunction(!state);
  }

  return (
    <button
      onClick={handleToggle}
      aria-label="åpne navigasjons meny"
      className={`flex group  ring-2  ${
        state
          ? "ring-white hover:bg-primary"
          : ` hover:bg-primary hover:ring-0  ${showBackground ? "ring-white" : "ring-primary"}`
      } active:opacity-20 h-full  px-4 gap-2  transition-all ${state && "ring-0"} scale-90  
         m-auto`}
    >
      <div className={`${state ? "rotate-0" : "rotate-90"} h-full  transition-all flex gap-1`}>
        <div
          className={`${
            state ? "-rotate-45  translate-x-2 bg-white" : `-rotate-0 ${showBackground ? "bg-white" : "bg-primary"}`
          } transition-all h-6 w-1 my-auto rounded-full group-hover:bg-white overflow-hidden bg-primary`}
        ></div>
        <div
          className={` ${
            state ? "h-0 w-0" : `h-6 w-1  ${showBackground ? "bg-white" : "bg-primary"}`
          } transition-all  rounded-full overflow-hidden group-hover:bg-white bg-primary my-auto`}
        ></div>
        <div
          className={`${
            state
              ? "rotate-45 relative bg-white  -translate-x-1 "
              : `rotate-0 ${showBackground ? "bg-white" : "bg-primary"}`
          } transition-all  h-6 my-auto w-1 rounded-full bg-primary group-hover:bg-white overflow-hidden `}
        ></div>
      </div>
      <div className="my-auto">
        <p
          className={`${
            state ? "text-white" : `text-primary  ${showBackground ? "text-white" : "text-primary"} `
          }   text-lg  group-hover:text-white font-bold`}
        >
          MENY
        </p>
      </div>
    </button>
  );
};

export default Navbar;
