import React, { useState } from "react";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";
import Section from "./section";
import { HiX } from "react-icons/hi";

const Index = () => {
  const [alignMiddle, setAlignMiddle] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [merge, setMerge] = useState(false);
  const [rounded, setRounded] = useState(false);
  const [color, setColor] = useState("bg-white");

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
          <PropToggle label="Justify Middle" setState={setAlignMiddle} state={alignMiddle} />
          <PropToggle label="Flipped" setState={setFlipped} state={flipped} />
          <PropToggle label="Merge" setState={setMerge} state={merge} />
          <PropInput label="Color" setState={setColor} state={color} />
          <PropToggle label="Image Rounded" setState={setRounded} state={rounded} />
        </div>
      </div>
    );
  }
  const props = {
    alignMiddle: alignMiddle,
    options: {
      flipped: flipped,
      merge: merge,
      card: {
        color: color,
      },
    },
    image: {
      src: "/images/bilde_av_hyttekatalog.webp",
      alt: "Fin hytte innendørs",
      options: {
        rounded: rounded,
      },
    },
    children: (
      <Section.Body>
        <h2 id="start" className="font-plex text-4xl lg:text-6xl font-bold">
          Når den største friheten er å kunne velge
        </h2>
        <p className="text-lg ">
          Velger du en laftet hytte fra Østlaft AS, velger du valgfrihet. Friheten til å få en hytte tilpasset akkurat
          dine ønsker og behov. Friheten til å la interiøret speile den perfekte blandingen av innovasjon og tradisjon
          som du finner i våre hyttemodeller. Friheten til å bygge et sted der familien vil samles i generasjoner, og
          hvor minner blir skapt. <br />
          Valget er ditt.
        </p>
        <div className="flex justify-between flex-col lg:flex-row lg:w-4/5 gap-6">
          <Button title="SE VÅRE MODELLER" meta={{ to: "/modeller", alt: "Naviger til våre hytter" }} />
          <Button secondary title="SE VÅRE TOMTER" meta={{ to: "/tomter", alt: "Naviger til våre tomter" }} />
        </div>
      </Section.Body>
    ),
  };

  function ClonedComp() {
    return React.createElement(Section, Object.assign(props));
  }

  return (
    <main>
      <Spacer />
      <CompProps />
      <div className="flex flex-col  justify-center ">
        <Layout>
          <ClonedComp />
        </Layout>
      </div>
      <Spacer />
    </main>
  );
};

export default Index;
