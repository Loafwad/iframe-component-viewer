import React, { useState } from "react";
import {
  HiDesktopComputer,
  HiDeviceMobile,
  HiDeviceTablet,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineDeviceTablet,
} from "react-icons/hi";

const ResizeFrame = ({ props, url }: { props: any; url: string }) => {
  const [size, setSize] = useState("1920px");
  const [isFocus, setFocus] = useState(false);
  function onMouseDownHandler(e: any) {
    let dragX = e.clientX;
    setFocus(true);
    document.onmousemove = function onMouseMoveHandler(e) {
      dragX = e.clientX;

      setSize(dragX + "px");
    };
    document.onmouseup = () => (setFocus(false), (document.onmousemove = document.onmouseup = null));
  }
  return (
    <div className="flex flex-col  ">
      <div className="relative  mx-auto  flex mt-6 gap-2">
        <button
          onClick={() => setSize("480px")}
          className={`text-4xl hover:shadow-md  ${
            size === "480px" ? "shadow-md bg-opacity-100 text-white" : "bg-opacity-5 text-black text-opacity-20"
          } p-2 bg-primary  rounded-md  `}
        >
          <HiOutlineDeviceMobile />
        </button>
        <button
          onClick={() => setSize("1920px")}
          className={`text-4xl hover:shadow-md ${
            size === "1920px" ? "shadow-md bg-opacity-100 text-white" : "bg-opacity-5 text-black text-opacity-20"
          } p-2 bg-primary  rounded-md  `}
        >
          <HiOutlineDesktopComputer />
        </button>
        <button
          onClick={() => setSize("960px")}
          className={`text-4xl hover:shadow-md ${
            size === "960px" ? "shadow-md bg-opacity-100 text-white" : "bg-opacity-5 text-black text-opacity-20"
          } p-2 bg-primary  rounded-md  `}
        >
          <HiOutlineDeviceTablet />
        </button>
      </div>
      <div className="relative mx-auto  ">
        <div className=" mx-auto mt-4 -mb-3 ">
          <div
            style={{ width: size }}
            className={`not-prose  ${!isFocus && "transition-all"} ${
              isFocus ? "pointer-events-none" : "pointer-events-auto"
            } flex  relative  rounded-xl overflow-hidden  `}
          >
            <iframe
              src={`${url}?${props}`}
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
