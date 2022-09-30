import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import ReactMarkdown from "react-markdown";

const InfoLabel = ({ text }: { text: string }) => {
  return (
    <div className="text-black text-opacity-40 flex gap-2">
      <div className="mb-auto">
        <HiInformationCircle />
      </div>
      <div className="text-sm">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default InfoLabel;
