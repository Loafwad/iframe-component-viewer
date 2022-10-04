import React, { useState } from "react";
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
  const props = router.asPath;
  var retrocycle = require("json-decycle").retrocycle;
  //remove all \ in props to make it valid json
  console.log(props);
  return (
    <main>
      <Spacer />
      <p>{}</p>

      <Spacer />
    </main>
  );
};

export default SectionProps;
