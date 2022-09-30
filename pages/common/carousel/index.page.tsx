import Image from "next/image";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import PropToggle from "../../../components/Story/PropToggle";
import Carousel from "./Carousel";

const Index = () => {
  const image = "/images/bilde_av_hyttekatalog.webp";

  const [dark, setDark] = useState(true);
  const [hasArrows, setHasArrows] = useState(true);

  function CompProps() {
    const [first, setfirst] = useState(false);

    function handleClose() {
      setfirst(!first);
      console.log("click");
    }
    return (
      <div className="bg-white left-0 bottom-0 fixed m-12 rounded-md shadow-md z-20">
        <button className={`mb-auto p-6 overflow-hidden relative text-black  text-2xl`} onClick={handleClose}>
          <div className="flex gap-2">
            <HiX />
            <p className="text-sm my-auto ">Props</p>
          </div>
        </button>
        <div className={` flex overflow-hidden mr-auto flex-col gap-6 ${first ? "h-0 p-0" : "h-full p-6"}`}>
          <PropToggle label="dark" setState={setDark} state={dark} />
          <PropToggle label="hasArrows" setState={setHasArrows} state={hasArrows} />
        </div>
      </div>
    );
  }
  const props = {
    dark: dark,
  };

  function ClonedComp() {
    return React.createElement(Carousel, Object.assign(props));
  }
  return (
    <main>
      <Spacer />
      <CompProps />
      <Layout>
        <Carousel dark={dark} options={{ hasArrows: hasArrows }} scrollID="myscroll">
          <div className=" relative h-full  min-h-[300px] md:min-h-[600px] lg:h-[600px] text-white">
            <Image blurDataURL={image} placeholder="blur" src={image} layout="fill" objectFit="cover" alt={""} />
          </div>
          <div className=" relative h-full  min-h-[300px] md:in-h-[600px] lg:h-[600px] text-white">
            <Image blurDataURL={image} placeholder="blur" src={image} layout="fill" objectFit="cover" alt={""} />
          </div>
        </Carousel>
      </Layout>
      <Spacer />
    </main>
  );
};

export default Index;
