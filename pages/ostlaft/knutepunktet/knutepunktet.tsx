import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Layout } from "../../../components/Misc/Layout";

/* url is the url of the blog page */

const Knutepunktet = ({ data, url }: { data: any; url: string }) => {
  if (!data.length) return <></>;
  return (
    <div className="flex flex-col gap-12">
      <div className="flex  justify-between">
        <Link href={`${url}`} passHref>
          <a className="link">
            <h6 className="font-plex text-4xl md:text-6xl font-bold">Knutepunktet</h6>
          </a>
        </Link>
        <div className="mt-auto hidden lg:flex  group">
          <div className="mt-auto w-fit group">
            <Link href={`${url}`} passHref>
              <a className="m-auto group-hover:opacity-40  transition-all group-hover:-translate-y-1 flex gap-2">
                <p>Les flere saker</p>
                <div className="my-auto  transition-all group-hover:pl-2">
                  <HiArrowRight />
                </div>
              </a>
            </Link>
            <div className="h-0.5 group-hover:opacity-40 bg-primary"></div>
          </div>
          <div className="h-0.5 group-hover:opacity-40 bg-primary"></div>
        </div>
      </div>
      <div className="h-0.5 bg-primary"></div>
      <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-6">
        {data.map((blog: any, i: number) => (
          <React.Fragment key={i}>
            <BlogCard {...blog} {...blog.image.data.attributes} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

type BlogCardProps = {
  url: string;
  title: string;
  description: string;
  id: number;
  slug: any;
  previewText: string;
};

const BlogCard = ({ slug, url, title, previewText }: BlogCardProps) => {
  return (
    <div className={`w-full  transiton-all animate-fadeIn flex flex-col gap-6`}>
      <Link href={`/blog/${slug}`}>
        <a className="h-[400px] group relative overflow-hidden w-full rounded-md bg-primary">
          <div className="w-full h-full transition-all group-hover:opacity-80 group-hover:scale-105">
            <Image placeholder="blur" blurDataURL={url} src={url} alt="" objectFit="cover" layout="fill" />
          </div>
        </a>
      </Link>
      <div className="flex flex-col h-auto grow  gap-6">
        <div className="flex flex-col gap-4">
          <h5 className="font-plex text-4xl">{title}</h5>
          {previewText && <p>{previewText}</p>}
        </div>
        <div className="mt-auto  w-fit group">
          <Link href={`/blog/${slug}`} passHref>
            <a className="m-auto group-hover:opacity-40  transition-all group-hover:-translate-y-1 flex gap-2">
              <p>Les mer</p>
              <div className="my-auto  transition-all group-hover:pl-2">
                <HiArrowRight />
              </div>
            </a>
          </Link>
          <div className="h-0.5 group-hover:opacity-40 bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default Knutepunktet;
