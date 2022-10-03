import Script from "next/script";
import React, { useState } from "react";
import CompProps from "../../../components/Misc/CompProps";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import InfoLabel from "../../../components/Story/PropInfo";
import LottieControl from "./LottieScroll";

const Index = () => {
  return (
    <main>
      <Spacer />

      <CompProps>
        <InfoLabel
          text={`Animation **has** to be located in the **public folder** 
            \n currently it is located in */public/lottie/data.json*`}
        />
      </CompProps>
      <Layout>
        <LottieControl />
      </Layout>
      <Spacer />
    </main>
  );
};

export default Index;
