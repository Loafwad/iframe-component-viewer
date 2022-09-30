import React from "react";
import { HiInformationCircle } from "react-icons/hi";

const InfoLabel = ({ text }: { text: string }) => {
  return (
    <div className="text-black text-opacity-40 flex gap-2">
      <div className="my-auto">
        <HiInformationCircle />
      </div>
      <p className=" text-sm ">{text}</p>
    </div>
  );
};

export default InfoLabel;
