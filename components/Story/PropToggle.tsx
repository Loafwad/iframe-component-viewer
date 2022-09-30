import React from "react";

const PropToggle = ({ state, setState, label }: { state: boolean; setState: any; label: string }) => {
  return (
    <button className="gap-12 flex justify-between" onClick={() => setState(!state)}>
      {label}
      <span className={`min-w-[6ch] ${state ? "text-sucess" : "text-error"} bg-black bg-opacity-10 rounded-md px-2`}>
        {state.toString()}
      </span>
    </button>
  );
};

export default PropToggle;
