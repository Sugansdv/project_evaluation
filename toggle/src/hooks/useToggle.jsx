import { useState, useEffect } from "react";

const useToggle = (key, defaultValue = false) => {
  const getInitial = () => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  };

  const [value, setValue] = useState(getInitial);

  const toggle = () => setValue((prev) => !prev);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, toggle];
};

export default useToggle;