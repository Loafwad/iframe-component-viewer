import React, { useState } from "react";
import Button from "../../../components/Button";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";
import Section from "./section";
import CompProps from "../../../components/Misc/CompProps";

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
      alt: "Fin hytte innendørs",
      options: {
        rounded: rounded,
      },
    },
    children: (
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
    ),
  };

  return (
    <main>
      <Spacer />
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
        <Section {...props}></Section>
      </Layout>
      <Spacer />
    </main>
  );
};

export default Index;
