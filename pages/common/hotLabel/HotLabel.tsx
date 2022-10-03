import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi";

type HotLabelProps = {
  title: string;
};

const HotLabel = ({ title }: HotLabelProps) => {
  const [isHot, setIsHot] = React.useState(false);

  const handleToggle = () => {
    setIsHot(!isHot);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        aria-label={title}
        title={title}
        className={`  ${!isHot && " animate-highlight"}
        z-10 transition-all relative   hover:animate-bouncePop hover:opacity-80 active:animate-pop flex`}
      >
        <div
          className={`h-16 w-16 scale-75  rounded-full ${
            isHot ? "bg-transparent" : "bg-primary"
          }  transition-all flex justify-center opacity-20`}
        ></div>
        <div className="opacity-100  scale-75  left-3 top-3 flex absolute rounded-full h-10 w-10  bg-primary">
          <HiPlus size={30} className={`text-white transition-all stroke-1 m-auto ${isHot && "rotate-45"} `} />
        </div>
      </button>
      <div
        className={`    absolute flex  ${
          isHot ? "w-auto animate-zoomIn" : " hidden w-0 h-0  "
        }  transition-all  rounded-md  overflow-hidden  bg-primary`}
      >
        <div className="flex relative flex-row min-w-[500px] text-secondary ">
          <div className="h-[280px] overflow-hidden  lg:w-3/5  bg-black">
            <Link passHref href="/modeller/varden">
              <a className=" lg:h-auto lg:w-3/5  group-hover:opacity-80  overflow-hidden">
                <div className="relative transition-all scale-110 group-hover:scale-105  h-full w-full">
                  <Image
                    blurDataURL={"/images/600x600.jpg"}
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    src={"/images/600x600.jpg"}
                    alt={""}
                  />
                </div>
                <p className="sr-only">Se våre hytter</p>
              </a>
            </Link>
          </div>
          <div className="w-2/5 h-full pl-6  my-auto gap-6  flex-col flex justify-center relative">
            <p className="font-bold text-2xl font-plex">{title}</p>
            <div className="flex flex-col gap-2">
              <figure className="flex   gap-4">
                <div className="h-6 w-6  my-auto opacity-60  relative">
                  <Image alt="Hus ikon" src={"/images/600x600.jpg"} layout="fill" objectFit="contain" />
                </div>
                <p className="my-auto text-lg">BRA 196,5 m²</p>
              </figure>
              <figure className="flex   gap-4">
                <div className="h-6 w-6 my-auto opacity-60  relative">
                  <Image alt="Hus ikon" src={"/images/600x600.jpg"} layout="fill" objectFit="contain" />
                </div>
                <p className="my-auto text-lg">5 sov</p>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotLabel;
