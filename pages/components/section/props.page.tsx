import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import Section from "./section";
import { useRouter } from "next/router";

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
        <Section {...props}>
          <Section.Body>
            <div className="flex flex-col gap-6">
              <h2 id="start" className="font-plex text-black text-4xl lg:text-6xl font-bold">
                I like things that are different
              </h2>
              <p className="text-lg ">
                Minim ad labore in labore minim exercitation ut Lorem labore adipisicing ea Lorem dolore quis. Sint sint
                cupidatat commodo ad laborum in eu velit irure dolore ad qui incididunt. Velit quis ex dolor nostrud
                <br />
                <br />
                excepteur cillum dolor culpa minim et. Aliquip sit est tempor laborum officia consectetur irure. Fugiat
                officia sit amet minim tempor dolor enim nulla duis ex laborum dolore enim.
              </p>
              <div className="flex text-white justify-between flex-col lg:flex-row  gap-6">
                <Button
                  color="bg-primary"
                  title="Check out this"
                  meta={{ to: "/modeller", alt: "Naviger til våre hytter" }}
                />
                <Button
                  color="bg-primary"
                  title="See something you like?"
                  meta={{ to: "/tomter", alt: "Naviger til våre tomter" }}
                />
              </div>
            </div>
          </Section.Body>
        </Section>
      </Layout>

      <Spacer />
    </main>
  );
};

export default Props;
