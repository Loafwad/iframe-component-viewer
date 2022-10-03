import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import CompProps from "../../../components/Misc/CompProps";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInfo from "../../../components/Story/PropInfo";
import { GridSection } from "./GridSection";

const data = {
  title: "Våre fokusområder",
  columns: {
    row1: [
      {
        id: 1,
        title: {
          title: "Bærekraft",
          link: "/bærekraft",
        },
        image: {
          image: "/images/600x600.jpg",
          link: "/bærekraft",
          alt: "skog",
        },
        content:
          "Et tre som vokser i skogen fanger mye CO², tre har lavere vekt enn andre materialer og dette reduserer både klimabelastning, samt kostnader ved transport.",
      },
      {
        id: 2,
        title: {
          title: "Produksjon",
          link: "/produksjon",
        },
        image: {
          image: "/images/600x600.jpg",
          link: "/produksjon",
          alt: "bilde av skog",
        },
        content:
          "Våre hovedprodukter er styrkesorterte takstol- og limtrelameller. Vi har Norges største klimalager (7000m²) for nedtørket trelast og stort takareal for takstollast.",
      },
    ],
    row2: [
      {
        id: 3,
        title: {
          title: "Begna-kvaliteten",
          link: "/begna-kvaliteten",
        },
        image: {
          image: "/images/600x600.jpg",
          link: "/begna-kvaliteten",
          alt: "skog",
        },
        content:
          "Et tre som vokser i skogen fanger mye CO², tre har lavere vekt enn andre materialer og dette reduserer både klimabelastning, samt kostnader ved transport.",
      },
      {
        id: 4,
        title: {
          title: "Det moderne sagbruket",
          link: "/moderne-sagbruket",
        },
        image: {
          image: "/images/600x600.jpg",
          link: "/moderne-sagbruket",
          alt: "skog",
        },
        content:
          "De siste årene har vi foretatt store investeringer med oppdatering av både saglinje og sorteringsverk (justerlinje)",
      },
    ],
  },
};

const Index = () => {
  return (
    <main>
      <Spacer />
      <CompProps>
        <PropInfo
          label={`Component is hard coded to maxium of two rows.

Will **error** if two rows are not provided.`}
        />
      </CompProps>
      <GridSection {...data} />
      <Spacer />
    </main>
  );
};

export default Index;
