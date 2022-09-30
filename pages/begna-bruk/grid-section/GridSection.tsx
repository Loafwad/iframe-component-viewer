import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Layout } from "../../../components/Misc/Layout";

type FocusProps = {
  title: string;
  columns: {
    row1: Array<{
      id: number;
      title: {
        title: string;
        link: string;
      };
      image: {
        image: string;
        link: string;
        alt: string;
      };
      content: string;
    }>;
    row2: Array<{
      id: number;
      title: {
        title: string;
        link: string;
      };
      image: {
        image: string;
        link: string;
        alt: string;
      };
      content: string;
    }>;
  };
};

export const GridSection = ({ columns, title }: FocusProps) => {
  return (
    <section id="main" className="">
      <Layout>
        <div className="flex flex-col gap-12 ">
          <div className=" flex flex-col md:flex md:flex-row-reverse gap-12 md:gap-6">
            <div className="flex flex-col ">
              <h2 className="text-4xl lg:text-dlg pb-12 font-plex font-extrabold text-black ">{title}</h2>
              <div className="flex flex-col gap-12 md:gap-6  md:flex-row-reverse">
                {columns.row1.map((item) => (
                  <Article key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className=" flex flex-col  md:flex md:flex-row gap-12  md:gap-6">
            {columns.row2.map((item) => (
              <Article key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};

type ArticleProps = {
  id: number;
  title: {
    title: string;
    link: string;
  };
  image: {
    image: string;
    link: string;
    alt: string;
  };
  content: string;
};

const Article = ({ title, content, image, id }: ArticleProps) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  const alternating = id % 2;

  return (
    <article
      ref={ref}
      style={{ animationDelay: `${(alternating * 25) / 100}s`, transform: "translateY(23px)" }}
      className={`${inView && `animate-fadeIn `} opacity-0 h-auto  flex flex-col ${
        alternating ? " w-full md:w-4/5" : "w-full md:w-3/5"
      } gap-6`}
    >
      <Link href={image.link} passHref>
        <a
          className="bg-green hover:opacity-80 transition-all focus:ring-2 rounded-md overflow-hidden w-full min-h-[300px] md:h-96 
        lg:h-[450px]
        relative"
        >
          <Image src={image.image} layout="fill" alt={image.alt} objectFit="cover" />
        </a>
      </Link>
      <section className="flex flex-col gap-4">
        <Link href={title.link} passHref>
          <a className="text-lg hover:underline hover:decoration-2 font-bold  text-green lg:text-dmd">{title.title}</a>
        </Link>
        <p className=" text-green text-sm lg:text-dsm lg:leading-relaxed xl:leading-relaxed">{content}</p>
      </section>
    </article>
  );
};
