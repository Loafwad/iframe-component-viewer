import React from "react";
import { Spacer } from "../../../components/Misc/Spacer";
import Knutepunktet from "./knutepunktet";

const data = [
  {
    title: "Nisi exercitation culpa occaecat veniam consequat ad dolore.",
    previewText:
      "Proident sit consequat tempor nostrud nostrud enim ex nulla ea veniam. Officia magna magna in mollit do excepteur.",
    image: {
      data: {
        attributes: {
          url: "/images/600x600.jpg",
        },
      },
    },
  },
  {
    title: "Do est est aliquip incididunt.",
    previewText:
      "Incididunt aliqua incididunt ad do aliquip non. Quis proident incididunt quis labore veniam in nisi commodo ad dolor laboris.",
    image: {
      data: {
        attributes: {
          url: "/images/1920x1080.jpg",
        },
      },
    },
  },
  {
    title: "Mollit in elit incididunt eu ea mollit reprehenderit aliqua est laboris.",
    previewText:
      "Incididunt aliqua incididunt ad do aliquip non. Quis proident incididunt quis labore veniam in nisi commodo ad dolor laboris.",
    image: {
      data: {
        attributes: {
          url: "/images/720x430.jpg",
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
