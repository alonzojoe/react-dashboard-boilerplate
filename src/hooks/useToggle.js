import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (newValue) => {
    setValue((prevValue) =>
      typeof newValue === "boolean" ? newValue : !prevValue
    );
  };

  return [value, toggleValue];
};

export default useToggle;
