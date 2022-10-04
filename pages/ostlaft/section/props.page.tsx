import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";
import Section from "./section";
import CompProps from "../../../components/Misc/CompProps";
import { useRouter } from "next/router";

const SectionProps = () => {
  const router = useRouter();
  const [props, setProps] = useState({});

  useEffect(() => {
    const queryData = router.asPath.split("?")[1];
    const queryData2 = queryData
      .replace(/%22/g, '"')
      .replace(/%20/g, " ")
      .replace(/%3A/g, ":")
      .replace(/%2C/g, ",")
      .replace(/%7B/g, "{")
      .replace(/%7D/g, "}")
      .replace(/%5B/g, "[")
      .replace(/%5D/g, "]")
      .replace(/%2F/g, "/");

    setProps(JSON.parse(queryData2));
  }, [router]);

  useEffect(() => {
    const el = document.getElementById("this");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [router]);

  return (
    <div className="bg-white">
      <Spacer />
      <Layout id="this">
        <Section {...props}>
          <Section.Body>
            <div className="flex flex-col gap-6">
              <h2 id="start" className="font-plex text-black text-4xl lg:text-6xl font-bold">
                Når den største friheten er å kunne velge
              </h2>
              <p className="text-lg ">
                Velger du en laftet hytte fra Østlaft AS, velger du valgfrihet. Friheten til å få en hytte tilpasset
                akkurat dine ønsker og behov. Friheten til å la interiøret speile den perfekte blandingen av innovasjon
                og tradisjon som du finner i våre hyttemodeller. Friheten til å bygge et sted der familien vil samles i
                generasjoner, og hvor minner blir skapt. <br />
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
        </Section>
      </Layout>

      <Spacer />
    </div>
  );
};

export default SectionProps;
