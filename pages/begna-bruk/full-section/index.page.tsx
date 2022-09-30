import React from "react";
import { Spacer } from "../../../components/Misc/Spacer";
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

const index = () => {
  return (
    <main>
      <Spacer />
      <FullSection {...data} />
      <Spacer />
    </main>
  );
};

export default index;
