import Link from "next/link";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import CompProps from "../../../../components/Misc/CompProps";
import { Layout } from "../../../../components/Misc/Layout";
import { Spacer } from "../../../../components/Misc/Spacer";
import PropInfo from "../../../../components/Story/PropInfo";
import PropInput from "../../../../components/Story/PropInput";
import PropToggle from "../../../../components/Story/PropToggle";
import Section from "../section";

const Index = () => {
  const [alignMiddle, setAlignMiddle] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [merge, setMerge] = useState(true);
  const [rounded, setRounded] = useState(false);
  const [color, setColor] = useState("bg-transparent");

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
        <div className="flex flex-col space-y-12 p-6 lg:p-24 bg-opacity-20 bg-accent">
          <div>
            <p className="text-lg">ET MODERNE EVENTYR</p>
            <h5 className="font-plex text-4xl lg:text-6xl font-bold">Om oss</h5>
          </div>
          <p className="text-lg">
            Østlaft AS har i mange år levert laftede hytter og hus, men etter overgang til ny produksjonslinje fra 2003,
            har det hele blitt et lite eventyr. Tradisjonsrik laft med varierende stokkhøyde, og norsk lafteknute,
            videreutviklet ved hjelp av moderne teknologi, har <br />
            bidratt til å gi bedriften en enorm utvikling.
          </p>
          <div className="flex flex-col justify-between lg:w-4/5 gap-6">
            <Link href="/om-oss" passHref>
              <a className="bg-primary group hover:scale-105 hover:opacity-80 transition-all flex-row flex gap-6 text-secondary p-6 rounded-md">
                <p className="flex text-lg font-exo">OM OSS I ØSTLAFT AS</p>
                <figure className="text-secondary group-hover:ml-2 transition-all text-2xl my-auto">
                  <HiArrowRight />
                </figure>
              </a>
            </Link>
            <Link href="/kontakt-oss" passHref>
              <a className="bg-primary group hover:scale-105 hover:opacity-80 transition-all flex-row flex gap-6 text-secondary p-6 rounded-md">
                <p className="flex text-lg font-exo">HER FINNER DU OSS</p>
                <figure className="text-secondary group-hover:ml-2 transition-all text-2xl my-auto">
                  <HiArrowRight />
                </figure>
              </a>
            </Link>
            <Link href="/ansatte" passHref>
              <a className="bg-primary group hover:scale-105 hover:opacity-80 transition-all flex-row flex gap-6 text-secondary p-6 rounded-md">
                <p className="flex text-lg font-exo">VÅRE ANSATTE</p>
                <figure className="text-secondary group-hover:ml-2 transition-all text-2xl my-auto">
                  <HiArrowRight />
                </figure>
              </a>
            </Link>
          </div>
        </div>
      </Section.Body>
    ),
  };

  return (
    <main>
      <Spacer />
      <CompProps>
        <PropInfo label="This component is the same component as section with *different* children." />
        <PropToggle label="Justify Middle" setState={setAlignMiddle} state={alignMiddle} />
        <PropToggle label="Flipped" setState={setFlipped} state={flipped} />
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
