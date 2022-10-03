import Image from "next/image";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import CompProps from "../../../../components/Misc/CompProps";
import { Layout } from "../../../../components/Misc/Layout";
import { Spacer } from "../../../../components/Misc/Spacer";
import PropToggle from "../../../../components/Story/PropToggle";
import Carousel from "./Carousel";

const Index = () => {
  const images = ["/images/600x600.jpg", "/images/1920x1080.jpg", "/images/720x430.jpg"];

  const [dark, setDark] = useState(true);
  const [hasArrows, setHasArrows] = useState(true);

  const props = {
    dark: dark,
  };

  function ClonedComp() {
    return React.createElement(Carousel, Object.assign(props));
  }
  return (
    <main>
      <Spacer />
      <CompProps>
        <PropToggle label="dark" setState={setDark} state={dark} />
        <PropToggle label="hasArrows" setState={setHasArrows} state={hasArrows} />
      </CompProps>
      <Layout>
        <Carousel images={images} dark={dark} options={{ hasArrows: hasArrows }} scrollID="myscroll"></Carousel>
      </Layout>
      <Spacer />
    </main>
  );
};

export default Index;
