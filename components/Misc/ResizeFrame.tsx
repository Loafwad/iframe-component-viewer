import React, { useState } from "react";
import { HiDesktopComputer, HiDeviceMobile } from "react-icons/hi";

const ResizeFrame = ({ props }: any) => {
  const [size, setSize] = useState("1920px");
  const [isFocus, setFocus] = useState(false);
  function onMouseDownHandler(e: any) {
    let dragX = e.clientX;
    setFocus(true);
    document.onmousemove = function onMouseMoveHandler(e) {
      dragX = e.clientX;
      setSize(dragX);
    };
    document.onmouseup = () => (setFocus(false), (document.onmousemove = document.onmouseup = null));
  }
  console.log(isFocus);
  return (
    <div>
      <div className="relative  mx-auto flex mt-6 gap-2">
        <button
          onClick={() => setSize("480px")}
          className="text-4xl bg-black bg-opacity-5 rounded-md text-black text-opacity-20"
        >
          <HiDeviceMobile />
        </button>
        <button
          onClick={() => setSize("1920px")}
          className="text-4xl bg-black bg-opacity-5 rounded-md text-black text-opacity-20"
        >
          <HiDesktopComputer />
        </button>
      </div>
      <div className="relative mx-auto scale-75">
        <div className=" mx-auto mt-4 -mb-3">
          <div
            style={{ width: size }}
            className={`not-prose ${
              isFocus ? "pointer-events-none" : "pointer-events-auto"
            } flex  relative  rounded-xl overflow-hidden  `}
          >
            <iframe
              src={`/ostlaft/section/props?${props}`}
              className={`relative  grow min-h-[900px] rounded-xl overflow-auto`}
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
          </div>
        </div>
        <div
          onMouseDown={(e) => onMouseDownHandler(e)}
          className="absolute z-20 overflow-auto inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none"
        >
          <div
            style={{ userSelect: "none", touchAction: "pan-y", transformOrigin: "50% 50% 0px" }}
            className=" pointer-events-auto   absolute overflow-hidden  top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize"
            draggable="false"
          >
            <div className="w-1.5 h-8 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResizeFrame;
