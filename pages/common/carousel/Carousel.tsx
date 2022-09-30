import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type CarouselProps = {
  children: JSX.Element[];
  scrollID: string;
  dark?: boolean;
  options?: {
    hasArrows?: boolean;
  };
};

const Carousel = ({ children, scrollID, dark, options }: CarouselProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
    if (index >= children.length - 1) setIndex(0);

    if (value === "back") {
      if (index === 0) setIndex(children.length - 1);
      else {
        setIndex(index - 1);
      }
    }
  }

  useEffect(() => {
    ScrollToElement(index.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ScrollToElement]);

  function handleTouchStart(e: any) {
    setTouchStart(e.targetTouches[0].clientX);
  }
  function handleTouchMoves(e: any) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleClickStart(e: any) {
    setTouchStart(e.clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 55) {
      handleScrollTo("forward");
    }

    if (touchStart - touchEnd < -55) {
      handleScrollTo("back");
    }
  }

  //if children is less than 2, don't show the carousel
  if (children.length < 2) return <p>noe gikk galt...</p>;

  return (
    <div className="flex h-[100%]  lg:min-h-[600px] flex-col-reverse w-full">
      <div className="flex flex-row gap-4 mx-auto">
        {options?.hasArrows && (
          <button onClick={() => handleScrollTo("back")} className="text-2xl">
            <HiChevronLeft />
          </button>
        )}
        <div className="flex gap-2   justify-center  py-4 w-fit ">
          {children.map((item, i) => (
            <button
              onClick={() => handleScrollTo(i.toString())}
              key={i}
              className={`h-2 w-2  ${dark ? "bg-primary" : "bg-white"} shadow-md rounded-full ${
                i === index ? "opacity-20" : "opacity-80"
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
      <Element name={scrollID} className="z-10 overflow-hidden rounded-md h-full w-full hover:cursor-pointer ">
        <div className="flex h-full bg-white  w-full gap-2  relative">
          <div
            className=" w-full  h-auto flex"
            onMouseDown={handleClickStart}
            onMouseUp={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMoves}
            onTouchEnd={handleTouchEnd}
          >
            <div
              id={scrollID}
              className="pointer-events-none select-none w-full bg-white h-auto  flex overflow-x-hidden  snap-x snap-center "
            >
              <button
                aria-label="swipe til venstre"
                onClick={() => handleScrollTo("back")}
                className="hidden md:visible rotate-180 h-full md:text-6xl absolute hover:opacity-20 left-0  text-4xl  drop-shadow-md"
              >
                <HiChevronRight />
              </button>
              {children.map((item, i) => (
                <div key={i} className=" w-full shrink-0 h-full  text-center  flex flex-col ">
                  <Element name={i.toString()} className="w-full h-full mx-24">
                    {item}
                  </Element>
                </div>
              ))}
              <button
                aria-label="swipe til høyre"
                onClick={() => handleScrollTo("forward")}
                className="rotate-0 hidden md:visible text-4xl md:text-6xl h-full hover:opacity-20  absolute right-0 drop-shadow-md"
              >
                <HiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Carousel;
