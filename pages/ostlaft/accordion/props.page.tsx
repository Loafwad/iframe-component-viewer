import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import CompProps from "../../../components/Misc/CompProps";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import PropInfo from "../../../components/Story/PropInfo";
import Accordion, { ItemCard } from "./Accordion";

const Props = () => {
  const router = useRouter();
  const [props, setProps] = useState({});

  useEffect(() => {
    const queryData = router.asPath.split("?")[1];
    const queryData2 = queryData
      .replace(/%22/g, '"')
      .replace(/%20/g, " ")
      .replace(/%3A/g, ":")
      .replace(/%2C/g, ",")
      .replace(/%7B/g, "{")
      .replace(/%7D/g, "}")
      .replace(/%5B/g, "[")
      .replace(/%5D/g, "]")
      .replace(/%2F/g, "/");

    setProps(JSON.parse(queryData2));
  }, [router]);

  useEffect(() => {
    const el = document.getElementById("this");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [router]);

  return (
    <main className="bg-frame">
      <Spacer />

      <Layout id="this">
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

export default Props;
