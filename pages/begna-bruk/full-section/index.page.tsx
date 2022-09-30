import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { Spacer } from "../../../components/Misc/Spacer";
import InfoLabel from "../../../components/Story/InfoLabel";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";
import { FullSection } from "./FullSection";

const data = {
  title: "Some title",
  description: `Dolore dolore reprehenderit dolor magna deserunt duis tempor. Sunt non aliqua duis amet. Reprehenderit commodo 

  ea reprehenderit incididunt ipsum elit mollit consequat ullamco nulla ipsum pariatur commodo consequat. Duis nisi laborum non 
  
  culpa minim non id magna ex cillum. Ad fugiat nostrud minim veniam in. In sint officia Lorem Lorem magna amet.`,
  images: [
    {
      url: "/images/bilde_av_hyttekatalog.webp",
      alt: "",
    },
    {
      url: "/images/bilde_av_hyttekatalog.webp",
      alt: "",
    },
  ],
  button: {
    title: "Full section",
    link: "/",
    alt: "",
  },
};

const Index = () => {
  const [title, setTitle] = useState("Some Title");

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
          <PropInput label="Title" setState={setTitle} state={title} />
          <InfoLabel text="New line in paragraph is possible with markdown" />
        </div>
      </div>
    );
  }
  const props = {
    title: title,
  };

  function ClonedComp() {
    return React.createElement(FullSection, Object.assign(props));
  }

  return (
    <main>
      <Spacer />
      <CompProps />
      <FullSection {...data} title={title} />
      <Spacer />
    </main>
  );
};

export default Index;
