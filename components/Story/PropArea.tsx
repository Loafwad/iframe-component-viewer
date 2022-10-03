import React, { useState, useEffect } from "react";

const PropArea = ({ state, setState, label }: { state: string; setState: any; label: string }) => {
  const [value, setValue] = useState(state);
  function handleValue(e: any) {
    handleUpdateState();
    setValue(e.target.value);
  }

  useEffect(() => {
    setState(value);
  }, [setState, value]);

  function handleUpdateState() {
    setState(value);
  }
  return (
    <div className="gap-2 flex ">
      <label>{label}</label>
      <textarea
        placeholder={value}
        value={value}
        className="text-top w-full p-2 bg-black bg-opacity-5 rounded-md min-h-[12ch] max-h-full overflow-y-auto"
        onChange={(e) => handleValue(e)}
      ></textarea>
    </div>
  );
};

export default PropArea;
