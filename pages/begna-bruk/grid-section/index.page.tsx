import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { Spacer } from "../../../components/Misc/Spacer";
import InfoLabel from "../../../components/Story/InfoLabel";
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
          <InfoLabel
            text={`Component is hard coded to maxium of two rows.

Will **error** if two rows are not provided.`}
          />
        </div>
      </div>
    );
  }

  return (
    <main>
      <Spacer />
      <CompProps />
      <GridSection {...data} />
      <Spacer />
    </main>
  );
};

export default Index;
