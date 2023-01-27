import React, { useState } from "react";
import CompProps from "../../../components/Misc/CompProps";
import ResizeFrame from "../../../components/Misc/ResizeFrame";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";

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
      src: "/images/600x600.jpg",
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
      <ResizeFrame url="/components/section/props" props={queryData} />
    </main>
  );
};

export default Index;
