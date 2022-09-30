import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

type CarouselProps = {
  scrollID: string;
  dark?: boolean;
  options?: {
    hasArrows?: boolean;
  };
  images: string[];
};

const Carousel = ({ scrollID, dark, options, images }: CarouselProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [index, setIndex] = useState(0);

  function ScrollToElement(value: string) {
    scroller.scrollTo(value, {
      duration: 300,
      containerId: scrollID,
      horizontal: true,
      isDynamic: true,
      smooth: true,
      ignoreCancelEvents: true,
    });
  }

  function handleScrollTo(value: string) {
    if (value === "forward") setIndex(index + 1);
    if (index >= images.length - 1) setIndex(0);

    if (value === "back") {
      if (index === 0) setIndex(images.length - 1);
      else {
        setIndex(index - 1);
      }
    }
  }

  useEffect(() => {
    ScrollToElement(index.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ScrollToElement]);

  function handleOpenModal(state: boolean) {
    setIsOpen(state);
    console.log(images[index]);
  }

  function handleScrollToIndex(value: number) {
    setIndex(value);
    ScrollToElement(value.toString());
  }

  //if children is less than 2, don't show the carousel
  if (images.length < 2) return <p>noe gikk galt...</p>;

  return (
    <>
      <MyDialog image={images[index]} isOpen={isOpen} setIsOpen={handleOpenModal} />
      <div className="flex h-[100%]  lg:min-h-[600px] flex-col-reverse w-full">
        <div className="flex flex-row gap-4 mx-auto">
          {options?.hasArrows && (
            <button onClick={() => handleScrollTo("back")} className="text-2xl">
              <HiChevronLeft />
            </button>
          )}
          <div className="flex gap-2   justify-center  py-4 w-fit ">
            {images.map((item, i) => (
              <button
                onClick={() => handleScrollToIndex(i)}
                key={i}
                className={`h-2 w-2  ${dark ? "bg-primary" : "bg-white"} shadow-md rounded-full ${
                  index === i ? "opacity-20" : "opacity-80"
                }`}
              ></button>
            ))}
          </div>
          {options?.hasArrows && (
            <button onClick={() => handleScrollTo("forward")} className="text-2xl">
              <HiChevronRight />
            </button>
          )}
        </div>

        <Element
          onClick={() => handleOpenModal(true)}
          name={scrollID}
          className="z-10 hover:opacity-80  transition-all overflow-hidden rounded-md h-full w-full hover:cursor-pointer "
        >
          <div className="flex h-full bg-white  w-full gap-2  relative">
            <div className=" w-full  h-auto flex">
              <div
                id={scrollID}
                className="pointer-events-none select-none w-full bg-white h-auto  flex overflow-x-hidden  snap-x snap-center "
              >
                {images.map((item: string, i: number) => (
                  <div key={i} className=" w-full shrink-0 h-full  text-center  flex flex-col ">
                    <Element name={i.toString()} className="w-full h-full mx-24">
                      <div className=" relative h-full  min-h-[300px] md:min-h-[600px] lg:h-[600px] text-white">
                        <Image
                          blurDataURL={item}
                          placeholder="blur"
                          src={item}
                          layout="fill"
                          objectFit="cover"
                          alt={""}
                        />
                      </div>
                    </Element>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Element>
      </div>
    </>
  );
};

function MyDialog({ isOpen, setIsOpen, image }: { isOpen: boolean; setIsOpen: any; image: string }) {
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <Dialog className="w-full" open={isOpen} onClose={handleClose}>
      <div className="fixed z-20 inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed w-fit overflow-hidden  h-fit m-auto rounded-md shadow-md bg-white z-20 inset-0 flex items-center  scale-75 justify-center">
        <Dialog.Panel>
          <div
            className=" relative grow  h-full min-w-[300px] min-h-[600px] lg:min-w-[1920px] 
          md:min-w-[1080px] md:min-h-[600px] lg:h-[1080px] text-white"
          >
            <Image blurDataURL={image} placeholder="blur" src={image} layout="fill" objectFit="cover" alt={""} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Carousel;
