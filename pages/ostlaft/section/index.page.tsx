import React, { useState } from "react";
import { HiDesktopComputer, HiDeviceMobile } from "react-icons/hi";
import CompProps from "../../../components/Misc/CompProps";
import { Layout } from "../../../components/Misc/Layout";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";
import Button from "../buttons/Button";
import SectionProps from "./props.page";
import Section from "./section";

const Index = () => {
  const [first, setfirst] = useState("1920px");

  const [alignMiddle, setAlignMiddle] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [rounded, setRounded] = useState(false);
  const [color, setColor] = useState("bg-transparent");
  const [merge, setMerge] = useState(false);
  const [indent, setIndent] = useState(false);

  const props = {
    alignMiddle: alignMiddle,
    flipped: flipped,
    merge: merge,
    color: color,
    indent: indent,
    image: "/images/bilde_av_hyttekatalog.webp",
    rounded: rounded,
  };
  var retrocycle = require("json-decycle").retrocycle;
  var decycle = require("json-decycle").decycle;

  var queryData = JSON.stringify(props, decycle());
  console.log(queryData);
  return (
    <div>
      <CompProps>
        <PropToggle label="Justify Middle" setState={setAlignMiddle} state={alignMiddle} />
        <PropToggle label="Flipped" setState={setFlipped} state={flipped} />
        <PropToggle label="Indent" setState={setIndent} state={indent} />
        <PropToggle label="Merge" setState={setMerge} state={merge} />
        <PropInput
          list={["bg-primary", "bg-secondary", "bg-accent", "bg-transparent"]}
          label="Color"
          setState={setColor}
          state={color}
        />
        <PropToggle label="Image Rounded" setState={setRounded} state={rounded} />
      </CompProps>
      <Layout>
        <div className="relative  mx-auto flex mt-6 gap-2">
          <button
            onClick={() => setfirst("480px")}
            className="text-4xl bg-black bg-opacity-5 rounded-md text-black text-opacity-20"
          >
            <HiDeviceMobile />
          </button>
          <button
            onClick={() => setfirst("1920px")}
            className="text-4xl bg-black bg-opacity-5 rounded-md text-black text-opacity-20"
          >
            <HiDesktopComputer />
          </button>
        </div>
        <div className="relative mx-auto scale-75">
          <div className=" mx-auto mt-4 -mb-3">
            <div style={{ width: first }} className="not-prose flex resize-x relative  rounded-xl overflow-hidden ">
              <iframe
                src={`/ostlaft/section/props?${queryData}`}
                className={`relative  grow min-h-[900px] rounded-xl overflow-auto`}
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
            </div>
          </div>
          <div className="absolute  overflow-auto inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none">
            <div
              style={{ userSelect: "none", touchAction: "pan-y", transformOrigin: "50% 50% 0px" }}
              className=" pointer-events-auto   absolute overflow-hidden  top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize"
              draggable="false"
            >
              <div className="w-1.5 h-8 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
/* children: (
      <Section.Body>
        <div className="flex flex-col gap-6">
          <h2 id="start" className="font-plex text-black text-4xl lg:text-6xl font-bold">
            Når den største friheten er å kunne velge
          </h2>
          <p className="text-lg ">
            Velger du en laftet hytte fra Østlaft AS, velger du valgfrihet. Friheten til å få en hytte tilpasset akkurat
            dine ønsker og behov. Friheten til å la interiøret speile den perfekte blandingen av innovasjon og tradisjon
            som du finner i våre hyttemodeller. Friheten til å bygge et sted der familien vil samles i generasjoner, og
            hvor minner blir skapt. <br />
            Valget er ditt.
          </p>
          <div className="flex text-white justify-between flex-col lg:flex-row  gap-6">
            <Button
              color="bg-primary"
              title="SE VÅRE MODELLER"
              meta={{ to: "/modeller", alt: "Naviger til våre hytter" }}
            />
            <Button
              color="bg-primary"
              title="SE VÅRE TOMTER"
              meta={{ to: "/tomter", alt: "Naviger til våre tomter" }}
            />
          </div>
        </div>
      </Section.Body>
    ), */
