import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import InfoLabel from "../../../components/Story/PropInfo";
import Accordion, { ItemCard } from "./Accordion";

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
          <InfoLabel
            text={`Animation speed is not *easy*   
           to adjust when each component has a dynamic height`}
          />
        </div>
      </div>
    );
  }
  const props = {
    title: title,
  };

  function ClonedComp() {
    return React.createElement(Accordion, Object.assign(props));
  }
  return (
    <main>
      <Spacer />
      <CompProps />
      <Layout>
        <Accordion>
          <Accordion.Item title="First row">
            <ItemCard type="m" i={1} value="List item 1" />
            <ItemCard type="m" i={2} value="List item 2" />
            <ItemCard type="m" i={3} value="List item 3" />
            <ItemCard type="m" i={4} value="List item 4" />
            <ItemCard type="m" i={5} value="List item 5" />
            <ItemCard type="m" i={6} value="List item 6" />
            <ItemCard type="m" i={7} value="List item 7" />
            <ItemCard type="m" i={8} value="List item 8" />
            <ItemCard type="m" i={9} value="List item 9" />
          </Accordion.Item>
          <Accordion.Item title="Second row">
            <ItemCard type="m" i={1} value="List item 1" />
          </Accordion.Item>
        </Accordion>
      </Layout>
      <Spacer />
    </main>
  );
};

export default Index;
