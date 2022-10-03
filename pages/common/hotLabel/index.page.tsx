import React from "react";
import CompProps from "../../../components/Misc/CompProps";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInfo from "../../../components/Story/PropInfo";

const Index = () => {
  return (
    <main>
      <Spacer />
      <CompProps>
        <PropInfo label="This component is broken..." />
      </CompProps>
      <Spacer />
    </main>
  );
};

export default Index;
