import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/Misc/Layout";
import { Spacer } from "../../../components/Misc/Spacer";
import Knutepunktet from "./knutepunktet";

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

  console.log(props);
  return (
    <main className="bg-frame">
      <Spacer />
      <Layout id="this">
        <Knutepunktet url="/something" data={props} />
      </Layout>
      <Spacer />
    </main>
  );
};

export default Props;
