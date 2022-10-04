import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import CompProps from "../../../components/Misc/CompProps";
import { Layout } from "../../../components/Misc/Layout";
import ResizeFrame from "../../../components/Misc/ResizeFrame";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInfo from "../../../components/Story/PropInfo";
import Accordion, { ItemCard } from "./Accordion";

const Index = () => {
  return (
    <main>
      <CompProps>
        <PropInfo label="Animation speed is not *easy* to adjust when each component is dynamic" />
      </CompProps>
      <ResizeFrame props={null} url="/ostlaft/accordion/props" />
    </main>
  );
};

export default Index;
