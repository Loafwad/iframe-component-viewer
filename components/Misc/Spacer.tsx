import React from "react";
import { Layout } from "./Layout";

export const Spacer = () => {
  return (
    <div className={`h-[50vh] w-full`}>
      <Layout>
        <p className="m-auto text-black text-opacity-10">{`<Spacer/>`}</p>
      </Layout>
    </div>
  );
};
