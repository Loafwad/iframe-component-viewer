import React, { useState } from "react";

const PropInput = ({ state, setState, label }: { state: string; setState: any; label: string }) => {
  const [value, setValue] = useState(state);
  function handleValue(e: any) {
    setValue(e.target.value);
  }
  function handleUpdateState() {
    setState(value);
  }
  return (
    <div className="gap-2 flex justify-between">
      <label>{label}</label>
      <input
        list="suggestions"
        onChange={(e) => handleValue(e)}
        className="gap-2 bg-black bg-opacity-5 rounded-md flex justify-between"
      />
      <datalist id="suggestions">
        <option value="bg-primary" />
        <option value="bg-transparent" />
        <option value="bg-accent" />
      </datalist>
      <button
        onClick={handleUpdateState}
        className={`hover:cursor-pointer min-w-[6ch] ${
          state ? "text-sucess" : "text-error"
        } bg-black bg-opacity-10 rounded-md px-2`}
      >
        {state.toString()}
      </button>
    </div>
  );
};

export default PropInput;