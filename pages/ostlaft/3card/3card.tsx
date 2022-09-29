import Link from "next/link";
import React from "react";
import { Layout } from "../../../components/Misc/Layout";

const ThreeCard = () => {
  return (
    <Layout>
      <div className="flex  justify-between">
        <Link href="/knutepunktet" passHref>
          <a className="link">
            <h6 className="font-plex  font-bold">Knutepunktet</h6>
          </a>
        </Link>
        <div className="mt-auto hidden lg:flex  group">
          <Link href="/knutepunktet" passHref>
            <a className="m-auto group-hover:opacity-40  transition-all group-hover:-translate-y-1 flex gap-0">
              <p>Les flere saker</p>
              <div className="my-auto  transition-all group-hover:pl-2"></div>
            </a>
          </Link>
          <div className="h-0.5 group-hover:opacity-40 bg-primary"></div>
        </div>
      </div>
      <div className="h-0.5 bg-primary"></div>
      <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-6"></div>
    </Layout>
  );
};

export default ThreeCard;
