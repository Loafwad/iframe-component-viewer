import Script from "next/script";
import React, { useState, useEffect } from "react";

import CompProps from "../../../components/Misc/CompProps";
import { Spacer } from "../../../components/Misc/Spacer";
import InfoLabel from "../../../components/Story/PropInfo";
import PropInput from "../../../components/Story/PropInput";
import { FullSection } from "./FullSection";

const data = {
  title: "Some title",
  description: `Dolore dolore reprehenderit dolor magna deserunt duis tempor. Sunt non aliqua duis amet. Reprehenderit commodo 

  ea reprehenderit incididunt ipsum elit mollit consequat ullamco nulla ipsum pariatur commodo consequat. Duis nisi laborum non 
  
  culpa minim non id magna ex cillum. Ad fugiat nostrud minim veniam in. In sint officia Lorem Lorem magna amet.`,
  images: [
    {
      url: "/images/600x600.jpg",
      alt: "",
    },
    {
      url: "/images/600x600.jpg",
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

  const props = {
    title: title,
  };
  return (
    <main>
      <Spacer />
      <CompProps>
        <PropInput label="Title" setState={setTitle} state={title} />
        <InfoLabel text="New line in paragraph is possible with markdown" />
      </CompProps>
      <FullSection {...data} {...props} />
      <Spacer />
    </main>
  );
};

export default Index;
