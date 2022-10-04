import React, { useState } from "react";
import { HiDesktopComputer, HiDeviceMobile } from "react-icons/hi";
import CompProps from "../../../components/Misc/CompProps";
import { Layout } from "../../../components/Misc/Layout";
import ResizeFrame from "../../../components/Misc/ResizeFrame";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";
import Button from "../buttons/Button";
import Props from "./props.page";
import Section from "./section";

const Index = () => {
  const [alignMiddle, setAlignMiddle] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [rounded, setRounded] = useState(false);
  const [color, setColor] = useState("bg-transparent");
  const [merge, setMerge] = useState(false);
  const [indent, setIndent] = useState(false);

  const props = {
    alignMiddle: alignMiddle,
    options: {
      flipped: flipped,
      merge: merge,
      card: {
        color: color,
      },
    },
    indent: indent,
    image: {
      src: "/images/bilde_av_hyttekatalog.webp",
      alt: "Bilde av hyttekatalog",
      options: {
        rounded: rounded,
      },
    },
  };
  var decycle = require("json-decycle").decycle;

  var queryData = JSON.stringify(props, decycle());

  return (
    <main>
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
      <ResizeFrame url="/ostlaft/section/props" props={queryData} />
    </main>
  );
};

export default Index;
