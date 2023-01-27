import React, { useState } from "react";
import CompProps from "../../../components/Misc/CompProps";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInput from "../../../components/Story/PropInput";
import PropToggle from "../../../components/Story/PropToggle";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Index = () => {
  const [title, setTitle] = useState("Button");
  const [secondary, setSecondary] = useState(false);

  return (
    <main>
      <Spacer />
      <CompProps>
        <PropInput setState={setTitle} state={title} label="Title" />
        <PropToggle setState={setSecondary} state={secondary} label="Secondary" />
      </CompProps>
      <Layout>
        <Button secondary={secondary} title={title} meta={{ to: "/", alt: "" }} />
      </Layout>
      <Spacer />
    </main>
  );
};

export default Index;
