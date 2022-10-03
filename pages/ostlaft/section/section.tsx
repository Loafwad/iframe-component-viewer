import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

type SectionProps = {
  children: JSX.Element | JSX.Element[];
  image?: {
    src: string;
    alt: string;
    options?: {
      rounded?: boolean;
    };
  };
  options?: {
    flipped: boolean;
    merge?: boolean;
    card?: {
      color: string;
    };
  };
  background?: boolean;
  alignMiddle?: boolean;
};

const Section = ({ children, image, options, alignMiddle, background }: SectionProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      className={`w-full relative ${options?.card?.color === "bg-primary" && "text-white"}   ${
        options?.card && `rounded-md ${options.merge ? "" : "py-12 lg:py-24 px-6 lg:px-24"} ${options.card.color}`
      }  `}
    >
      <div
        ref={ref}
        className={`w-full  rounded-md z-10  relative md:flex-row  flex flex-col lg:flex-row  ${
          inView && "animate-fadeInLeft motion-safe:animate-fadeIn  will-change-transform "
        } justify-start
        flex ${options?.flipped && "flex-col  lg:flex-row-reverse"} ${
          options?.merge ? "gap-0 overflow-hidden" : "gap-12 lg:gap-24"
        }  w-full opacity-0 `}
      >
        {image && (
          <div
            className={`w-full ${
              image.options?.rounded && "rounded-full  aspect-square lg:aspect-square overflow-hidden "
            }`}
          >
            <ImageAside rounded={options?.merge} src={image.src} alt={image.alt} />
          </div>
        )}
        <div className={`w-full flex-col ${options?.merge ? "p-0" : "p-0"}  ${alignMiddle && "my-auto"} flex gap-12`}>
          {children}
        </div>
      </div>
      {background && (
        <div className=" -z-0 absolute -bottom-[420px] -right-40 lg:w-[1500px]  h-[1000px]   opacity-5 scale-x-[-1]">
          <Image src="/icons/utvidet_logo_hvit.svg" layout="fill" objectFit="contain" alt="" />
        </div>
      )}
    </div>
  );
};

type ContentProps = {
  children: JSX.Element | JSX.Element[];
};

const Body = ({ children }: ContentProps) => {
  return <div className={`flex flex-col gap-6 text-black  `}>{children}</div>;
};

const ImageAside = ({ src, alt, rounded }: { src: string; alt: string; rounded?: boolean }) => {
  return (
    <div className="flex   w-full h-full">
      <div
        className={`h-full min-h-[420px]  md:h-[100%] lg:min-h-[500px]   ${
          !rounded && "rounded-md"
        }  xl:h-auto overflow-hidden w-full relative`}
      >
        {src && <Image blurDataURL={src} placeholder="blur" src={src} layout="fill" objectFit="cover" alt={alt} />}
      </div>
    </div>
  );
};

Section.Body = Section;
export default Section;
