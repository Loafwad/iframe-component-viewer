import React, { useState } from "react";

const PropInput = ({
  state,
  setState,
  label,
  list,
}: {
  state: string;
  setState: any;
  label: string;
  list?: string[];
}) => {
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
      {list && (
        <datalist id="suggestions">
          {list.map((item, i) => (
            <option key={i} value={item} />
          ))}
        </datalist>
      )}
      <button
        onClick={handleUpdateState}
        className={`hover:cursor-pointer hover:bg-opacity-20 min-w-[6ch] ${
          state ? "text-sucess" : "text-error"
        } bg-black bg-opacity-10 rounded-md px-2`}
      >
        {state.toString()}
      </button>
    </div>
  );
};

export default PropInput;
