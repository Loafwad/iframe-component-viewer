import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import Button from "../../../components/Button";
import { Layout } from "../../../components/Misc/Layout";

type KortSagtProps = {
  title: string;
  description: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
  button: {
    title: string;
    link: string;
    alt: string;
  };
};

export const FullSection = ({ title, description, images, button }: KortSagtProps) => {
  return (
    <div className="bg-primary w-full h-full py-12 md:py-24">
      <Layout>
        <div className="flex-col-reverse lg:flex-row flex w-full  gap-12 lg:gap-24 ">
          <div className="w-full min-h-[300px]    flex flex-col md:flex-row gap-12 ">
            <div className=" rounded-md overflow-hidden min-h-[30vh] grow w-full relative">
              <Image src={images[0].url} layout="fill" objectFit="cover" alt={images[0].alt} />
            </div>
            <div className=" rounded-md overflow-hidden min-h-[30vh] grow w-full relative">
              <Image src={images[1].url} layout="fill" objectFit="cover" alt={images[1].alt} />
            </div>
          </div>
          <article className="h-auto w-full lg:w-1/3 text-white flex flex-col gap-6">
            <h3 className="font-plex text-4xl md:text-6xl font-bold">{title}</h3>
            <ReactMarkdown>{description}</ReactMarkdown>
            <div className=" w-full md:w-fit lg:w-full text-primary ">
              <Link href={button.link} passHref>
                <Button color="bg-secondary" title={button.title} meta={{ to: button.link, alt: "" }} />
              </Link>
            </div>
          </article>
        </div>
      </Layout>
    </div>
  );
};
