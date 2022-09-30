import React from "react";
import { Spacer } from "../../../components/Misc/Spacer";
import Knutepunktet from "./knutepunktet";

const data = [
  {
    title: "test",
    previewText:
      "Proident sit consequat tempor nostrud nostrud enim ex nulla ea veniam. Officia magna magna in mollit do excepteur.",
    image: {
      data: {
        attributes: {
          url: "/images/bilde_av_hyttekatalog.webp",
        },
      },
    },
  },
  {
    title: "test",
    previewText:
      "Incididunt aliqua incididunt ad do aliquip non. Quis proident incididunt quis labore veniam in nisi commodo ad dolor laboris.",
    image: {
      data: {
        attributes: {
          url: "/images/bilde_av_hyttekatalog.webp",
        },
      },
    },
  },
  {
    title: "test",
    previewText:
      "Incididunt aliqua incididunt ad do aliquip non. Quis proident incididunt quis labore veniam in nisi commodo ad dolor laboris.",
    image: {
      data: {
        attributes: {
          url: "/images/bilde_av_hyttekatalog.webp",
        },
      },
    },
  },
];

const index = () => {
  return (
    <main>
      <Spacer />
      <Knutepunktet data={data} url="knutepunktet" />
      <Spacer />
    </main>
  );
};

export default index;
